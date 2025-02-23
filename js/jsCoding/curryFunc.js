function sum(...args) {
  let allNums = [...args].flat();
  if (!args.length) {
    return 0;
  }
  const tempSum = (...args2) => {
    if (args2.length) {
      allNums = [...allNums, ...args2.flat()];
      return tempSum;
    } else {
      return allNums.reduce((a, b) => a + b, 0);
    }
  };
  return tempSum;
}

const temp = sum([5]);
console.log(temp(6)());
