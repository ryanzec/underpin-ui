const user = [
  {
    id: 1,
    role: 'USER',
    system: 'USER',
    permissions: ['READ'],
  },
  {
    id: 2,
    role: 'USER',
    system: 'ROLE',
    permissions: ['READ'],
  },
];

const admin = [
  {
    id: 3,
    role: 'ADMIN',
    system: 'USER',
    permissions: ['CREATE', 'READ', 'UPDATE', 'DELETE'],
  },
  {
    id: 4,
    role: 'ADMIN',
    system: 'USER',
    permissions: ['CREATE', 'READ', 'UPDATE', 'DELETE'],
  },
];

const all = [user, admin];

module.exports = {
  user,
  admin,
  all,
};
