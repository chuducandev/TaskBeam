export const generateUniqueId = (prefix = '') => {
  const id = `${prefix}${Math.random().toString(36).substr(2, 9)}`;
  return id;
};
