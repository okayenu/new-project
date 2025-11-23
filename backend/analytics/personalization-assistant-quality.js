/**
 * Analytics event instrumentation: personalization-assistant-quality
 * Task: Instrument analytics for personalization assistant quality: helpfulness votes, d
 */
'use strict';

const EVENT_PREFIX = 'PERSONALIZATION_ASSISTANT_QUALITY';

const EVENTS = {
  VIEW: `${EVENT_PREFIX}_VIEW`,
  CLICK: `${EVENT_PREFIX}_CLICK`,
  SUBMIT: `${EVENT_PREFIX}_SUBMIT`,
  ERROR: `${EVENT_PREFIX}_ERROR`,
};

/**
 * Normalize event payload to ensure consistent shape across all personalization-assistant-quality events.
 * @param {string} type - Event type from EVENTS
 * @param {object} data - Raw event data
 * @returns {object} Normalized payload
 */
function normalizePayload(type, data = {}) {
  return {
    event: type,
    timestamp: new Date().toISOString(),
    sessionId: data.sessionId || null,
    userId: data.userId || null,
    properties: {
      ...data,
      source: 'personalization-assistant-quality',
    },
  };
}

function trackView(data) {
  const payload = normalizePayload(EVENTS.VIEW, data);
  dispatchEvent(payload);
}

function trackClick(data) {
  const payload = normalizePayload(EVENTS.CLICK, data);
  dispatchEvent(payload);
}

function trackSubmit(data) {
  const payload = normalizePayload(EVENTS.SUBMIT, data);
  dispatchEvent(payload);
}

function trackError(data) {
  const payload = normalizePayload(EVENTS.ERROR, data);
  dispatchEvent(payload);
}

function dispatchEvent(payload) {
  if (typeof window !== 'undefined' && window.analytics) {
    window.analytics.track(payload.event, payload.properties);
  }
  if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'test') {
    console.info('[analytics:personalization-assistant-quality]', JSON.stringify(payload));
  }
}

module.exports = { EVENTS, normalizePayload, trackView, trackClick, trackSubmit, trackError };
