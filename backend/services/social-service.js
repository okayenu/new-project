/**
 * Service boundary: checkout-orchestration
 * Task: Implement modular service boundary for checkout orchestration in `backend/servic
 */
'use strict';

class CheckoutOrchestrationService {
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
    this.logger.info('[CheckoutOrchestrationService] getAll', { filters });
    return this.repository.findMany(filters);
  }

  async getById(id) {
    this.logger.info('[CheckoutOrchestrationService] getById', { id });
    return this.repository.findById(id);
  }

  async create(payload) {
    this.logger.info('[CheckoutOrchestrationService] create', { payload });
    const record = await this.repository.create(payload);
    this.eventBus.emit('checkout-orchestration:created', record);
    return record;
  }

  async update(id, payload) {
    this.logger.info('[CheckoutOrchestrationService] update', { id });
    const record = await this.repository.update(id, payload);
    this.eventBus.emit('checkout-orchestration:updated', record);
    return record;
  }

  async remove(id) {
    this.logger.info('[CheckoutOrchestrationService] remove', { id });
    await this.repository.delete(id);
    this.eventBus.emit('checkout-orchestration:deleted', { id });
  }
}

module.exports = { CheckoutOrchestrationService };
