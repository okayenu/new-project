/**
 * Seed-data generator: community-experiences
 * Task: Create seed-data generator for community experiences scenarios in `scripts/seed-
 *
 * Usage: node scripts/seed-community-experiences.js
 */
'use strict';

const { randomUUID } = require('crypto');

const STATUSES = ['active', 'inactive', 'pending'];
const SAMPLE_SIZE = 50;

function generateItem(index) {
  return {
    id: randomUUID(),
    index,
    status: STATUSES[index % STATUSES.length],
    createdAt: new Date(Date.now() - index * 86400000).toISOString(),
    updatedAt: new Date().toISOString(),
    metadata: {
      source: 'community-experiences-seed',
      version: '1.0.0',
      tags: ['community-experiences', `item-${index}`],
    },
  };
}

function generateDataset(size = SAMPLE_SIZE) {
  return Array.from({ length: size }, (_, i) => generateItem(i));
}

/** Simulate realistic user journey events */
function generateUserJourneyEvents(items) {
  return items.flatMap((item) => [
    { type: 'view', itemId: item.id, ts: item.createdAt },
    { type: 'click', itemId: item.id, ts: item.updatedAt },
    ...(item.status === 'active' ? [{ type: 'submit', itemId: item.id, ts: item.updatedAt }] : []),
  ]);
}

const dataset = generateDataset();
const events = generateUserJourneyEvents(dataset);

console.log(`[seed:community-experiences] Generated ${dataset.length} items and ${events.length} events`);
module.exports = { dataset, events, generateItem, generateDataset };
