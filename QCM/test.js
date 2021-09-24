let x, y;
[, , , ...rest] = [10, 20, 11, [111, 120, 7]];
console.log(rest.shift());
const phrase = "8790:bonjour le monde:8987:7777:Hello World:9007";

const sentence = phrase
  .split(":")
  .map((w) => w.slice(w.length - 1))
  .filter(Number);
console.log(sentence);

console.log(["8791".slice("8791".length - 1)].filter(Number));

console.log(["7", "0", "9"].filter(Number));

console.log(Number("0"));

//

class Rectangle {
  constructor(w, h) {
    this._w = w;
    this._h = h;
  }

  get w() {
    return this._w;
  }
}

class Square extends Rectangle {
  constructor(w) {
    this._w = w;
    super(w);
  }
}

try {
  const s = new Square(3);
} catch (e) {
  console.log("error");
}

const Add = (number, callback) => {
  setTimeout(() => {
    callback(number);
  }, 500);
};

Add(1, (number) => {
  let sum = number;
  console.log(sum);
  Add(2, (number) => {
    sum += number;
    console.log(sum);

    Add(3, (number) => {
      sum += number;
      console.log(sum);
    });
  });
});


console.log("24" + 0.2 *"24")