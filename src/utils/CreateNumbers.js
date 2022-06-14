const createNumbers = (length) => {
  const numbers = new Array(length).fill().map((_, i) => i + 1);
  return numbers;
};

export default createNumbers;
