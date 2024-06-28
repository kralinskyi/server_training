// eslint-disable-next-line no-unused-vars
export const errroHandler = (err, req, res, next) => {
  res.status(500).json({
    message: 'Something went wrong',
    error: err.message,
  });
};
