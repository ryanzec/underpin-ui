const formatResponse = (response, body) => {
  let jsonData = null;
  let dataKey = 'data';

  if (response.statusCode >= 400) {
    dataKey = 'error';
    jsonData = {
      message: body,
    };
  } else if (body) {
    try {
      jsonData = JSON.parse(body);
    } catch (error) {
      response.statusCode = 500;

      return `unable to parse json response: ${error.message}`;
    }
  }

  return JSON.stringify({
    [dataKey]: jsonData,
  });
};

module.exports = (request, response, next) => {
  const originalSend = response.send;

  response.send = function(string) {
    let body = string instanceof Buffer ? string.toString() : string;

    originalSend.call(this, formatResponse(response, body));
  };

  next();
};
