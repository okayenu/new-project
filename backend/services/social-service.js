/**
 * Service boundary: shopping-assistant
 * Task: Implement modular service boundary for shopping assistant in `backend/services/s
 */
'use strict';

class ShoppingAssistantService {
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
    this.logger.info('[ShoppingAssistantService] getAll', { filters });
    return this.repository.findMany(filters);
  }

  async getById(id) {
    this.logger.info('[ShoppingAssistantService] getById', { id });
    return this.repository.findById(id);
  }

  async create(payload) {
    this.logger.info('[ShoppingAssistantService] create', { payload });
    const record = await this.repository.create(payload);
    this.eventBus.emit('shopping-assistant:created', record);
    return record;
  }

  async update(id, payload) {
    this.logger.info('[ShoppingAssistantService] update', { id });
    const record = await this.repository.update(id, payload);
    this.eventBus.emit('shopping-assistant:updated', record);
    return record;
  }

  async remove(id) {
    this.logger.info('[ShoppingAssistantService] remove', { id });
    await this.repository.delete(id);
    this.eventBus.emit('shopping-assistant:deleted', { id });
  }
}

module.exports = { ShoppingAssistantService };
