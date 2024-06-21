#!/usr/bin/node

const argument = process.argv.slice(2);

const arg1 = argument[0];
const arg2 = argument[1];

if (arg1 === undefined) {
  console.log('undefined is undefined');
} else if (arg1 !== undefined & arg2 === undefined) {
  console.log(arg1 + ' is undefined');
} else if (arg1 !== undefined & arg2 !== undefined) {
  console.log(arg1 + ' is ' + arg2);
}
