const rolesPermissions = require('../data/rolesPermissions');
const roles = require('../data/roles');
const systems = require('../data/systems');
const usersRoles = require('../data/usersRoles');
const users = require('../data/users');

module.exports = {
  rolesPermissions: rolesPermissions.all,
  roles: roles.all,
  systems: systems.all,
  usersRoles: usersRoles.all,
  users: users.all,
};
