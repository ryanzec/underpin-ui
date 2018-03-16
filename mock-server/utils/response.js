const urlDataKeyMap = {
  roles: '/api/v1/roles',
  rolesPermissions: '/api/v1/rolesPermissions',
  systems: '/api/v1/systems',
  users: '/api/v1/users',
  usersRoles: '/api/v1/usersRoles',
};
const multiToSingleMap = {
  roles: 'roles',
  rolesPermissions: 'rolePermissions',
  systems: 'system',
  users: 'user',
  usersRoles: 'userRoles',
};

const getDataKeyWrapper = (url) => {
  let key;
  let mapKeys = Object.keys(urlDataKeyMap);

  for (let x = 0; x < mapKeys.length; x += 1) {
    const multiKey = mapKeys[x];
    const singleKey = multiToSingleMap[multiKey];
    const singleRegex = new RegExp(`${urlDataKeyMap[multiKey]}/[a-zA-Z0-9\-]+`);
    const multiRegex = new RegExp(urlDataKeyMap[multiKey]);

    if (url.match(singleRegex)) {
      key = singleKey;

      break;
    } else if (url.match(multiRegex)) {
      key = multiKey;

      break;
    }
  }

  return key;
};

const formatResponse = (response, body, url) => {
  let jsonData = null;
  let dataKey = 'data';

  if (response.statusCode >= 400) {
    dataKey = 'error';
    jsonData = {
      message: body,
    };
  } else if (body) {
    try {
      const extraWrappingKey = getDataKeyWrapper(url);

      jsonData = JSON.parse(body);

      if (extraWrappingKey) {
        jsonData = {
          [extraWrappingKey]: jsonData,
        };
      }
    } catch (error) {
      response.statusCode = 500;

      return `unable to parse json response: ${error.message}`;
    }
  }

  return JSON.stringify({
    [dataKey]: jsonData,
  });
};

module.exports = {
  formatResponse,
};
