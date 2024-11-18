class Event {
  constructor(fn) {
    this.eventHandlers = [];
    this.subcribe = this.eventHandlers.push(fn);
    this.unsubscribe = this.eventHandlers.filter((func) => func !== fn);
  }
}

const evenHandler1 = (item) => {
  console.log("fired: ", item);
};
const evenHandler2 = (item) => {
  console.log("fired: ", item);
};
const newEvent = new Event();
console.log(newEvent);
