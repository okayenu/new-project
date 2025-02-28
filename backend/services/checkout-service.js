/**
 * Service boundary: personalization
 * Task: Implement modular service boundary for personalization in `backend/services/chec
 */
'use strict';

class PersonalizationService {
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
    this.logger.info('[PersonalizationService] getAll', { filters });
    return this.repository.findMany(filters);
  }

  async getById(id) {
    this.logger.info('[PersonalizationService] getById', { id });
    return this.repository.findById(id);
  }

  async create(payload) {
    this.logger.info('[PersonalizationService] create', { payload });
    const record = await this.repository.create(payload);
    this.eventBus.emit('personalization:created', record);
    return record;
  }

  async update(id, payload) {
    this.logger.info('[PersonalizationService] update', { id });
    const record = await this.repository.update(id, payload);
    this.eventBus.emit('personalization:updated', record);
    return record;
  }

  async remove(id) {
    this.logger.info('[PersonalizationService] remove', { id });
    await this.repository.delete(id);
    this.eventBus.emit('personalization:deleted', { id });
  }
}

module.exports = { PersonalizationService };
