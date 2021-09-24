const Add = (number, callback, error) => {
  setTimeout(() => {
    number = parseFloat(number);
    if (isNaN(number)) {
      error("Error is not a number");

      return;
    }

    callback(number);
  }, 500);
};

const error = (message) => {
  console.error(message);
};

// callback hell
Add(
  1,
  (number) => {
    let sum = number;
    Add(
      "Bonjour",
      (number) => {
        sum += number;
        Add(
          "2.8",
          (number) => {
            sum += number;
            console.log(sum);
          },
          error
        );
      },
      error
    );
  },
  error
);
