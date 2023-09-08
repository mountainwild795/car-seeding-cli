import chalk from "chalk";
import { Book } from "../models/book";
import { BOOKS } from "../util/mockDataGenerator";

const log = console.log;
export const seedCmd = async () => {
  log(chalk.yellowBright("Seeding random books..."));
  const books = BOOKS;
  log(chalk.blue(JSON.stringify(books, null, 2)));
  Book.insertMany(books);
  log(chalk.green(`Successfully uploaded ${books.length} books!`));
};
