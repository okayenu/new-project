/**
 * Schema contracts for general
 * Generated task: Design and document recommendation quality schema contracts for `user_activity_p
 *
 * Migration notes:
 *  - v1 -> v2: added optional fields; backward-compatible
 *  - Rollout gate: feature flag `enable_general`
 */

export interface UserActivityProfile {
  id: string;
  createdAt: string;        // ISO-8601
  updatedAt: string;        // ISO-8601
  status: 'active' | 'inactive' | 'pending';
  metadata: Record<string, unknown>;
}

export interface UserActivityProfileCreateInput {
  status?: UserActivityProfile['status'];
  metadata?: Record<string, unknown>;
}

export interface UserActivityProfileUpdateInput {
  status?: UserActivityProfile['status'];
  metadata?: Partial<UserActivityProfile['metadata']>;
}

/** Rollback validation: re-run migration down then up and assert row count matches */
export function validateRollback(before: number, after: number): boolean {
  return before === after;
}
