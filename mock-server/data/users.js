const admin = {
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

const user = {
  id: 3,
  firstName: 'Test',
  lastName: 'User3',
  username: 'testuser3',
  email: 'testuser3@example.com',
  status: 'active',
};

const all = [admin, inactive, user];

module.exports = {
  admin,
  inactive,
  user,
  all,
};
