/**
 * Unit tests: catalog-intelligence core logic
 * Task: Write unit tests for catalog intelligence core logic in `tests/checkout.test.js`
 */
'use strict';

const { CatalogIntelligenceService } = require('../backend/services/catalog-intelligence');

const mockRepository = {
  findMany: jest.fn(),
  findById: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};
const mockLogger = { info: jest.fn(), error: jest.fn() };
const mockEventBus = { emit: jest.fn() };

let service;
beforeEach(() => {
  jest.clearAllMocks();
  service = new CatalogIntelligenceService({
    repository: mockRepository,
    logger: mockLogger,
    eventBus: mockEventBus,
  });
});

describe('CatalogIntelligenceService', () => {
  describe('getAll', () => {
    it('returns items from repository', async () => {
      mockRepository.findMany.mockResolvedValue([{ id: '1' }]);
      const result = await service.getAll();
      expect(result).toEqual([{ id: '1' }]);
      expect(mockRepository.findMany).toHaveBeenCalledTimes(1);
    });

    it('passes filters through to repository', async () => {
      mockRepository.findMany.mockResolvedValue([]);
      await service.getAll({ status: 'active' });
      expect(mockRepository.findMany).toHaveBeenCalledWith({ status: 'active' });
    });
  });

  describe('getById', () => {
    it('returns a single item', async () => {
      mockRepository.findById.mockResolvedValue({ id: 'abc' });
      const result = await service.getById('abc');
      expect(result).toEqual({ id: 'abc' });
    });

    it('returns null when not found', async () => {
      mockRepository.findById.mockResolvedValue(null);
      const result = await service.getById('missing');
      expect(result).toBeNull();
    });
  });

  describe('create', () => {
    it('creates a record and emits event', async () => {
      const payload = { status: 'active' };
      mockRepository.create.mockResolvedValue({ id: 'new', ...payload });
      const result = await service.create(payload);
      expect(mockEventBus.emit).toHaveBeenCalledWith('catalog-intelligence:created', result);
    });
  });

  describe('remove', () => {
    it('deletes and emits event', async () => {
      mockRepository.delete.mockResolvedValue(1);
      await service.remove('123');
      expect(mockEventBus.emit).toHaveBeenCalledWith('catalog-intelligence:deleted', { id: '123' });
    });
  });

  describe('edge cases', () => {
    it('handles repository error gracefully', async () => {
      mockRepository.findMany.mockRejectedValue(new Error('DB error'));
      await expect(service.getAll()).rejects.toThrow('DB error');
    });
  });
});
