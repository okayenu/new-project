/**
 * Service boundary: search-and-discovery
 * Task: Implement modular service boundary for search and discovery in `backend/services
 */
'use strict';

class SearchAndDiscoveryService {
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
    this.logger.info('[SearchAndDiscoveryService] getAll', { filters });
    return this.repository.findMany(filters);
  }

  async getById(id) {
    this.logger.info('[SearchAndDiscoveryService] getById', { id });
    return this.repository.findById(id);
  }

  async create(payload) {
    this.logger.info('[SearchAndDiscoveryService] create', { payload });
    const record = await this.repository.create(payload);
    this.eventBus.emit('search-and-discovery:created', record);
    return record;
  }

  async update(id, payload) {
    this.logger.info('[SearchAndDiscoveryService] update', { id });
    const record = await this.repository.update(id, payload);
    this.eventBus.emit('search-and-discovery:updated', record);
    return record;
  }

  async remove(id) {
    this.logger.info('[SearchAndDiscoveryService] remove', { id });
    await this.repository.delete(id);
    this.eventBus.emit('search-and-discovery:deleted', { id });
  }
}

module.exports = { SearchAndDiscoveryService };
