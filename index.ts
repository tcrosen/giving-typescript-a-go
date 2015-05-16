class Name {
  first: string;
  last: string;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }

  full() {
    return this.first + ' ' + this.last;
  }
}

class Player {
  name: Name;
  constructor(name: Name) {
    this.name = name;
  }
}

var terry = new Player(new Name('Terry', 'Rosen'));

console.log('terry: ', terry);
console.log('terry: ', terry.name.full());