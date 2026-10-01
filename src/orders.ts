const orders = [{ id: 1, tenantId: 'fixture-a' }, { id: 2, tenantId: 'fixture-b' }];

export function listOrders(tenantId: string) {
  return orders.filter(order => order.tenantId === tenantId);
}
