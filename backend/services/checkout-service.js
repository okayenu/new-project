/**
 * Service boundary: video-review-ecosystem
 * Task: Implement modular service boundary for video review ecosystem in `backend/servic
 */
'use strict';

class VideoReviewEcosystemService {
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
    this.logger.info('[VideoReviewEcosystemService] getAll', { filters });
    return this.repository.findMany(filters);
  }

  async getById(id) {
    this.logger.info('[VideoReviewEcosystemService] getById', { id });
    return this.repository.findById(id);
  }

  async create(payload) {
    this.logger.info('[VideoReviewEcosystemService] create', { payload });
    const record = await this.repository.create(payload);
    this.eventBus.emit('video-review-ecosystem:created', record);
    return record;
  }

  async update(id, payload) {
    this.logger.info('[VideoReviewEcosystemService] update', { id });
    const record = await this.repository.update(id, payload);
    this.eventBus.emit('video-review-ecosystem:updated', record);
    return record;
  }

  async remove(id) {
    this.logger.info('[VideoReviewEcosystemService] remove', { id });
    await this.repository.delete(id);
    this.eventBus.emit('video-review-ecosystem:deleted', { id });
  }
}

module.exports = { VideoReviewEcosystemService };
