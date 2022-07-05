#!/usr/bin/env node

/**
 * This function is made for the command line.
 * You can also test this program with `npm run test`
 */
const { program } = require("commander");
const { parse } = require("../src/index");

program
  .description(
    "Parse a paragraph with HTML and check if the HTML tags are valid"
  )
  .argument("<string>", "paragraph to parse");

program.parse();

// console.log(program.processedArgs[0]);
console.log(parse(program.processedArgs[0]));
