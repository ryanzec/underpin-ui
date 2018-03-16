module.exports = (request, response, next) => {
  if (!request.headers['x-custom-session']) {
    response.status(401).send('Unauthorized');

    return;
  }

  next();
};
