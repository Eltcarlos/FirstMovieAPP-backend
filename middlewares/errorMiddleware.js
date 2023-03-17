// error handling middleware

export const errorHandler = (err, res) =>{
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message
  });
};