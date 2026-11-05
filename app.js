const student = { name: "Ulars", age: 15, skills: ["js", "css"] };

const { name, age } = student;

const {
  skills: [js, css],
} = student;

function printStudent({ name, age }) {
  console.log(`Student ${name}, age ${age}`);
}

function sumAndMultiply(first, ...rest) {
  const sum = rest.reduce((acc, num) => acc + num, 0);
  return sum * first;
}


const sortedArray = [
  ...arraySecond,
  ...arrayFourth,
  ...arrayFirst,
  ...arrayFiveth,
  ...arrayThird,
];
