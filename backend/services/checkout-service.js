/**
 * Service boundary: 3d-product-rendering
 * Task: Implement modular service boundary for 3D product rendering in `backend/services
 */
'use strict';

class 3dProductRenderingService {
  /**
   * @param {object} deps - Injected dependencies
   * @param {object} deps.repository - Data-access layer
   * @param {object} deps.logger - Logging interface
   * @param {object} deps.eventBus - Analytics/event emitter
   */
  constructor({ repository, logger, eventBus }) {
    this.repository = repository;
    this.logger = logger;
    this.eventBus = eventBus;
  }

  async getAll(filters = {}) {
    this.logger.info('[3dProductRenderingService] getAll', { filters });
    return this.repository.findMany(filters);
  }

  async getById(id) {
    this.logger.info('[3dProductRenderingService] getById', { id });
    return this.repository.findById(id);
  }

  async create(payload) {
    this.logger.info('[3dProductRenderingService] create', { payload });
    const record = await this.repository.create(payload);
    this.eventBus.emit('3d-product-rendering:created', record);
    return record;
  }

  async update(id, payload) {
    this.logger.info('[3dProductRenderingService] update', { id });
    const record = await this.repository.update(id, payload);
    this.eventBus.emit('3d-product-rendering:updated', record);
    return record;
  }

  async remove(id) {
    this.logger.info('[3dProductRenderingService] remove', { id });
    await this.repository.delete(id);
    this.eventBus.emit('3d-product-rendering:deleted', { id });
  }
}

module.exports = { 3dProductRenderingService };
