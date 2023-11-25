const jwt = require("jsonwebtoken");

const requestLogger = (request, _, next) => {
  console.log("Method: ", request.method);
  console.log("Path:   ", request.path);
  console.log("Body:   ", request.body);
  console.log("---");
  next();
};

const unknownEndpoint = (_, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (error, _, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  } else if (error.name === "JsonWebTokenError") {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

const authMiddleware = (request, response, next) => {
  let token = request.get("authorization");
  token =
    token && token.startsWith("Bearer ") ? token.replace("Bearer ", "") : null;
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  if (!decodedToken.id) {
    return response.status(401).json({ error: "token invalid" });
  }
  request.user = decodedToken;
  next();
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
  authMiddleware,
};
