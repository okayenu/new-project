/**
 * Service boundary: merchant-operations
 * Task: Implement modular service boundary for merchant operations in `backend/services/
 */
'use strict';

class MerchantOperationsService {
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
    this.logger.info('[MerchantOperationsService] getAll', { filters });
    return this.repository.findMany(filters);
  }

  async getById(id) {
    this.logger.info('[MerchantOperationsService] getById', { id });
    return this.repository.findById(id);
  }

  async create(payload) {
    this.logger.info('[MerchantOperationsService] create', { payload });
    const record = await this.repository.create(payload);
    this.eventBus.emit('merchant-operations:created', record);
    return record;
  }

  async update(id, payload) {
    this.logger.info('[MerchantOperationsService] update', { id });
    const record = await this.repository.update(id, payload);
    this.eventBus.emit('merchant-operations:updated', record);
    return record;
  }

  async remove(id) {
    this.logger.info('[MerchantOperationsService] remove', { id });
    await this.repository.delete(id);
    this.eventBus.emit('merchant-operations:deleted', { id });
  }
}

module.exports = { MerchantOperationsService };
