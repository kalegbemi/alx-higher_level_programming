#!/usr/bin/node

const num1 = process.argv[2];
const num2 = process.argv[3];

const x = parseInt(num1, 10);
const y = parseInt(num2, 10);

function add (x, y) {
  if ((isNaN(x)) || (isNaN(y))) {
    console.log('NaN');
    return NaN;
  }

  console.log(x + y);
  return (x + y);
}

add(x, y);
