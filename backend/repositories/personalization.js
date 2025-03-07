/**
 * Repository layer: personalization
 * Task: Add repository layer methods for personalization queries with index strategy com
 *
 * Index strategy:
 *  - Primary index on `id` (B-tree)
 *  - Composite index on (status, createdAt) for list queries
 *  - Partial index on status = 'active' for hot-path reads
 */
'use strict';

class PersonalizationRepository {
  constructor(db) {
    this.db = db;
    this.table = 'personalization';
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

module.exports = { PersonalizationRepository };
