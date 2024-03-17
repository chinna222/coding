// To create observer design pattern we need two participants
// 1. Host
//     a. It will maintain list of observers.
//     b. Provides option to subscribe and unsubscribe to the observers.
//     c. Notifies the observer when state changes.
// 2. Observer
//     a. Has a function that gets invoked every time a state changes.

class Human {
  constructor(age, height, weight) {
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.abilities = [];
  }
}
