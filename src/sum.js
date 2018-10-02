export const sum = values => {
  if (!values.length) {
    return 0;
  }

  return values.reduce((acc, value) => {
    if (Number.isInteger(value)) {
      return acc + value;
    }

    return acc;
  });
};
