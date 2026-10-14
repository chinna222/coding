let s = "hello";

// s = 2; we cant change type since s is a string

let a: any;

a.b.foo(); // even this wont throw error why because any means saying to typescript I have given up and i cant say which type it is
// hence using any means compromising on code quality

let u: unknown; // we can assign any value to u but we can

let n: never; // means n is never existed will discuss more on this

function getNumber(x: number): number {
  // we dont need to mention return type in this case because its obvious that this function will return a number only but still we can mannualy tell
  return x + 1;
}

function log(...args: number[]) {
  console.log(args);
}

log(1, 3, 2);

function logBoth(...args: (number | string)[]) {
  console.log(args);
}

logBoth(1, 3, 4, "sss");

type NumberToNumber = (x: number) => number; // instead of typing manually we can define type like this and use this to tell an arrow functions input type and return type

const func: NumberToNumber = (x) => x + 1;

func(1);

type BoolorString = boolean | string;

let xx: BoolorString = Math.random() > 0.5 ? "" : true;

const obj = {
  success: true as const,
  paylaod: {},
};

// obj.payload = false;
