class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.length++;
    this.items.push(item);
    this.items.sort((a,b) => a-b)
    
  }
  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds")
    }
    else return this.items[pos-1];
  }
  max() {
    if (this.length > 0) {
      return Math.max(...this.items)
    }
    else throw new Error("EmptySortedList")
  }
  min() {
    if (this.length > 0) {
      return Math.min(...this.items)
    }
    else throw new Error("EmptySortedList")
  }
  average() {
    if (this.length > 0) {
      return this.sum()/this.length;
    }
    else throw new Error("EmptySortedList")

  }
  sum() {
    if (this.length === 0) return 0;
    else return this.items.reduce(((a, b) => a + b), 0);

  }
};

module.exports = SortedList;
