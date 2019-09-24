const servers = {
  users: process.env.VUE_APP_API_USERS,
};

export function getServer(serverId) {
  return servers[serverId];
}

export function getUrl(serverId, uri) {
  return `${getServer(serverId)}${uri}`;
}
