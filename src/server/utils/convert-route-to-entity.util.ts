const mapping: Record<string, string> = {
  organizations: 'organization',
  participants: 'participant',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
