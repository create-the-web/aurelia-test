export class Tests {
  numbers = ['one', 'two', 'three'];
  newitem = '';
  
  constructor() {
    setTimeout(() => this.numbers = ['four', 'five'], 3000);
  }

  add(value) {
    this.numbers.push(value);
    this.newitem = '';
  }

  remove(idx) {
    this.numbers.splice(idx, 1);
  }
}
