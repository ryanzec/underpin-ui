const active = {
  id: 1,
  firstName: 'Test',
  lastName: 'User',
  username: 'testuser',
  email: 'testuser@example.com',
  status: 'active',
};

const inactive = {
  id: 2,
  firstName: 'Test',
  lastName: 'User2',
  username: 'testuser2',
  email: 'testuser2@example.com',
  status: 'inactive',
};

const all = [active, inactive];

module.exports = {
  active,
  inactive,
  all,
};
