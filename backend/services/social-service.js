/**
 * Service boundary: review-relevance
 * Task: Implement modular service boundary for review relevance in `backend/services/soc
 */
'use strict';

class ReviewRelevanceService {
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
    this.logger.info('[ReviewRelevanceService] getAll', { filters });
    return this.repository.findMany(filters);
  }

  async getById(id) {
    this.logger.info('[ReviewRelevanceService] getById', { id });
    return this.repository.findById(id);
  }

  async create(payload) {
    this.logger.info('[ReviewRelevanceService] create', { payload });
    const record = await this.repository.create(payload);
    this.eventBus.emit('review-relevance:created', record);
    return record;
  }

  async update(id, payload) {
    this.logger.info('[ReviewRelevanceService] update', { id });
    const record = await this.repository.update(id, payload);
    this.eventBus.emit('review-relevance:updated', record);
    return record;
  }

  async remove(id) {
    this.logger.info('[ReviewRelevanceService] remove', { id });
    await this.repository.delete(id);
    this.eventBus.emit('review-relevance:deleted', { id });
  }
}

module.exports = { ReviewRelevanceService };
