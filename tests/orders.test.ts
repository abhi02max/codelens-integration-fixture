import assert from 'node:assert/strict';
import test from 'node:test';
import { listOrders } from '../src/orders.ts';

test('returns an array', () => {
  assert.ok(Array.isArray(listOrders('fixture-a')));
});
