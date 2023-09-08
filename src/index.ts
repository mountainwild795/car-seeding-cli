#!/usr/bin/env node

import figlet from "figlet";
import { program } from "commander";
import { booksCmd } from "./commands/books";
import { initDB } from "./db";
import { seedCmd } from "./commands/seed";

console.log(figlet.textSync("MongoDB CLI"));

initDB();

program.version("1.0.0").description("An CLI tool to seed data into MongoDB");

program
  .command("books")
  .description("Shows collection of all books in MongoDB")
  .option("-c, --count", "Only get the count. If not specified it will show all data.")
  .action((options) => booksCmd(options.count));

program.command("seed").description("Uploads random books onto MongoDB").action(seedCmd);

program.parse(process.argv);
