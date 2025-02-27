/**
 * Shared utilities: search-and-discovery
 * Task: Run refactor pass: extract shared utilities for search and discovery formatting,
 */
'use strict';

/**
 * Format a search-and-discovery item for API responses.
 * Deduplicated from service and route layers.
 */
function formatItem(raw) {
  if (!raw) return null;
  return {
    id: raw.id,
    status: raw.status,
    createdAt: raw.createdAt,
    updatedAt: raw.updatedAt,
    metadata: raw.metadata || {},
  };
}

/** Format a list of items */
function formatList(items = []) {
  return items.map(formatItem).filter(Boolean);
}

/** Deduplicated constants */
const STATUSES = Object.freeze(['active', 'inactive', 'pending']);
const DEFAULT_LIMIT = 20;
const DEFAULT_OFFSET = 0;

/**
 * Map raw DB row to API response shape.
 * Used across service, repository, and route layers.
 */
function mapResponseShape(item) {
  return {
    ...formatItem(item),
    _links: {
      self: `/api/search-and-discovery/${item.id}`,
      collection: `/api/search-and-discovery`,
    },
  };
}

/**
 * Parse and validate pagination params from query string.
 */
function parsePagination(query = {}) {
  return {
    limit: Math.min(parseInt(query.limit, 10) || DEFAULT_LIMIT, 100),
    offset: parseInt(query.offset, 10) || DEFAULT_OFFSET,
  };
}

module.exports = { formatItem, formatList, mapResponseShape, parsePagination, STATUSES };
