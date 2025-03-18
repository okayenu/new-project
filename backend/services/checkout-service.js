/**
 * Service boundary: delivery-visibility
 * Task: Implement modular service boundary for delivery visibility in `backend/services/
 */
'use strict';

class DeliveryVisibilityService {
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
    this.logger.info('[DeliveryVisibilityService] getAll', { filters });
    return this.repository.findMany(filters);
  }

  async getById(id) {
    this.logger.info('[DeliveryVisibilityService] getById', { id });
    return this.repository.findById(id);
  }

  async create(payload) {
    this.logger.info('[DeliveryVisibilityService] create', { payload });
    const record = await this.repository.create(payload);
    this.eventBus.emit('delivery-visibility:created', record);
    return record;
  }

  async update(id, payload) {
    this.logger.info('[DeliveryVisibilityService] update', { id });
    const record = await this.repository.update(id, payload);
    this.eventBus.emit('delivery-visibility:updated', record);
    return record;
  }

  async remove(id) {
    this.logger.info('[DeliveryVisibilityService] remove', { id });
    await this.repository.delete(id);
    this.eventBus.emit('delivery-visibility:deleted', { id });
  }
}

module.exports = { DeliveryVisibilityService };
