export const isNotValidStatusCode = (statusCode) => {
  return !(statusCode >= 200 && statusCode < 300);
};
  