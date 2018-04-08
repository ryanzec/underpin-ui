const users = require('./users');
const roles = require('./roles');

module.exports = {
  all: [
    {
      userId: users.admin.id,
      roleId: roles.admin.id,
    },
    {
      userId: users.inactive.id,
      roleId: roles.admin.id,
    },
    {
      userId: users.user.id,
      roleId: roles.user.id,
    },
  ],
};
