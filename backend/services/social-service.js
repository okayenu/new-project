/**
 * Service boundary: community-experiences
 * Task: Implement modular service boundary for community experiences in `backend/service
 */
'use strict';

class CommunityExperiencesService {
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
    this.logger.info('[CommunityExperiencesService] getAll', { filters });
    return this.repository.findMany(filters);
  }

  async getById(id) {
    this.logger.info('[CommunityExperiencesService] getById', { id });
    return this.repository.findById(id);
  }

  async create(payload) {
    this.logger.info('[CommunityExperiencesService] create', { payload });
    const record = await this.repository.create(payload);
    this.eventBus.emit('community-experiences:created', record);
    return record;
  }

  async update(id, payload) {
    this.logger.info('[CommunityExperiencesService] update', { id });
    const record = await this.repository.update(id, payload);
    this.eventBus.emit('community-experiences:updated', record);
    return record;
  }

  async remove(id) {
    this.logger.info('[CommunityExperiencesService] remove', { id });
    await this.repository.delete(id);
    this.eventBus.emit('community-experiences:deleted', { id });
  }
}

module.exports = { CommunityExperiencesService };
