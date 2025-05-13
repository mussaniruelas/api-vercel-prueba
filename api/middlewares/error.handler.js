function errorLogs(error, request, response, next) {
  console.error(error.message);
  console.error(error.stack);
  next(error);
}

function errorHandler(error, req, res, next) {
  res.status(500).json({
    message: error.message,
    satck: error.stack,
  });
}

module.exports = { errorLogs, errorHandler };
