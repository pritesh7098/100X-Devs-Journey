#!/usr/bin/env node

const { program } = require("commander");
const fs = require("fs");

program
  .version("1.0.0")
  .description("Word Counter CLI")
  .option("-f, --file <path>", "specify the file path");

program.parse(process.argv);

const options = program.opts();

if (options.file) {
  fs.readFile(options.file, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      process.exit(1);
    }
    const wordCount = data
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
    console.log(`The file contains ${wordCount} words.`);
  });
} else {
  console.error("Please specify a file path using the -f or --file option.");
  process.exit(1);
}
