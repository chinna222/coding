function filterUntyped(array: any[], test: (value: any) => boolean): any[] {
  const result: any[] = [];
  for (const val of array) {
    if (test(val)) {
      result.push(val);
    }
  }
  return result;
}

function filter<T>(array: T[], test: (value: T) => boolean): T[] {
  const result: T[] = [];
  for (const val of array) {
    if (test(val)) {
      result.push(val);
    }
  }
  return result;
}

const nums = [1, 2, 3, 4];

const evenNums = filter<number>(nums, (num) => num % 2 === 0);

const strArr = ["a", ""];

const emptyStrArray = filter<string>(strArr, (str) => str === "");

export {};
