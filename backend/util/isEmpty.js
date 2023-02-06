export const isEmpty = (value) => {
  return (
    value === null ||
    value === undefined ||
    (typeof value === 'string' && value.length === 0) ||
    (value.constructor === Object && Object.keys(value).length === 0) ||
    (Array.isArray(value) && value.length === 0)
  );
};
