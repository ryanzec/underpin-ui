const user = {
  id: 1,
  system: 'USER',
  permissions: ['CREATE', 'READ', 'UPDATE', 'DELETE'],
};
const role = {
  id: 2,
  system: 'ROLE',
  permissions: ['CREATE', 'READ', 'UPDATE', 'DELETE'],
};
const all = [role, user];

module.exports = {
  user,
  role,
  all,
};
