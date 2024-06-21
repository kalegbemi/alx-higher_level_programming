#!/usr/bin/node

const arg = process.argv[2];

const num = parseInt(arg, 10);

if (isNaN(num)) {
  console.log('Missing size');
} else {
  const x = 'X'.repeat(num);
  for (let j = 0; j < num; j++) {
    console.log(x);
  }
}
