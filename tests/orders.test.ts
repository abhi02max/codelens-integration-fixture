import assert from 'node:assert/strict';
import test from 'node:test';
import { listOrders } from '../src/orders.ts';
import { buildSearchQuery } from '../src/search.ts';

test('returns an array', () => {
  assert.ok(Array.isArray(listOrders('fixture-a')));
});

test('builds the ordinary search fixture', () => {
  assert.equal(buildSearchQuery('widget'), "SELECT id FROM fixture_orders WHERE label = 'widget'");
});
