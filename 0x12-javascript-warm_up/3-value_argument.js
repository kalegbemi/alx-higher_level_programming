#!/usr/bin/node

const argument = process.argv.slice(2);

const arg = argument[0];

if (arg === undefined) {
	console.log('No argument');
} else 
{console.log(arg);}
