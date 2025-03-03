/**
 * Repository layer: community-experiences
 * Task: Add repository layer methods for community experiences queries with index strate
 *
 * Index strategy:
 *  - Primary index on `id` (B-tree)
 *  - Composite index on (status, createdAt) for list queries
 *  - Partial index on status = 'active' for hot-path reads
 */
'use strict';

class CommunityExperiencesRepository {
  constructor(db) {
    this.db = db;
    this.table = 'community_experiences';
  }

  /** Query shape: { status?, limit?, offset?, orderBy? } */
  async findMany(filters = {}) {
    const { status, limit = 20, offset = 0, orderBy = 'createdAt' } = filters;
    let query = this.db(this.table).orderBy(orderBy, 'desc').limit(limit).offset(offset);
    if (status) query = query.where({ status });
    return query.select();
  }

  async findById(id) {
    return this.db(this.table).where({ id }).first();
  }

  async create(payload) {
    const [id] = await this.db(this.table).insert(payload).returning('id');
    return this.findById(id);
  }

  async update(id, payload) {
    await this.db(this.table).where({ id }).update(payload);
    return this.findById(id);
  }

  async delete(id) {
    return this.db(this.table).where({ id }).delete();
  }
}

module.exports = { CommunityExperiencesRepository };
