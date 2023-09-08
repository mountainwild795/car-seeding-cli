import chalk from "chalk";
import { Book } from "../models/book";

const log = console.log;
export const booksCmd = async (onlyShowCount: boolean) => {
  log(chalk.yellowBright("Current books in stock:"));
  const books = await Book.find({});
  log(chalk.green(`Found ${books.length} books in stock`));
  if (!onlyShowCount) {
    log(chalk.blue(books));
  }
};
