export const convertIndexesToId = (i, j) => {
  return i + ":" + j;
};

export const convertIdToIndexes = (id) => {
  const indexes = id.split(":");
  return [Number(indexes[0]), Number(indexes[1])];
};
