module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  const errOptions = {
    status: err.status,
    message: err.message,
  };
  if (process.env.NODE_ENV === "development") {
    errOptions.err = err;
    errOptions.stack = err.stack;
  }
  res.status(err.statusCode).json(errOptions);
};
