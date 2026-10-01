export function buildSearchQuery(term: string) {
  return "SELECT id FROM fixture_orders WHERE label = '" + term + "'";
}
