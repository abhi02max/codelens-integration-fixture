const orders = [{ id: 1, tenantId: 'fixture-a' }, { id: 2, tenantId: 'fixture-b' }];

export function listOrders(_tenantId: string) {
  return orders;
}
