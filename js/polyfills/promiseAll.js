// Promise.all() accepts an array of promises and returns a promise that resolves when all the promises in the array
// are fullfilled or when the iterable containes no promises. It rejects with the reason of the first promise that rejects.

// It will return a promise
// either will resolve with the result of all the passed promises or reject with the error message of the first failed promise.
// results will be in the same order as that of the promises passed.

const customPromiseAll = function (promiseList) {
  const results = [];
  return new Promise((resolve, reject) => {
    promiseList.forEach((promise) => {
      promise
        .then((res) => {
          results.push(res);
          if (results.length == promiseList.length) {
            resolve(results);
          }
        })
        .catch((error) => reject(error));
    });
  });
};

// test cases

const asyncTask = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time > 5000) {
        reject(`Rejected ${time}`);
      }
      resolve(`Resolved ${time}`);
    });
  });
};

const asyncTask2 = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time > 5000) {
        reject(`Rejected ${time} asyncTask2`);
      }
      resolve(`Resolved ${time} asyncTask2`);
    });
  });
};

const taskList = [asyncTask(1000), asyncTask(2000), asyncTask2(3000)];

customPromiseAll(taskList)
  .then((results) => console.log(results))
  .catch((error) => console.log(error));
