import inquirer from "inquirer";
import formatLog from "../utils/formatLog";

import { Formatter } from "../classes/Formatter";

const textFormatter = new Formatter();

let allFunctions = [
  "capitalizeFirstLetter",
  "reverse",
  "jumbleWord",
  "toCamelCase",
  "toKebabCase",
  "toPascalCase",
  "toSnakeCase",
].sort((a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
});

async function promptForOptions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Input a string to be formatted:",
        name: "inputStr",
      },
      {
        type: "list",
        message: "What do you want to do with the string?",
        name: "formatOption",
        choices: allFunctions,
      },
    ])
    .then((answers) => {
      let option = answers.formatOption;
      let str = answers.inputStr;

      handleOptions(option, str);
    })
    .catch((error) => {
      if (error.isTtyError) {
        formatLog(
          "error",
          "TextFul: Something went wrong in the production.\nThis is likely an error from our side."
        );
      } else {
        formatLog("error", "TextFul: Something went fatally wrong.");
      }
    });
}

function handleOptions(option: string, str: string) {
  switch (option) {
    case "capitalizeFirstLetter":
      formatLog("info", textFormatter.capitalizeFirstLetter(str));
      break;
    case "reverse":
      formatLog("info", textFormatter.reverse(str));
      break;
    case "jumbleWord":
      formatLog("info", textFormatter.jumbleWord(str));
      break;
    case "toCamelCase":
      formatLog("info", textFormatter.toCamelCase(str));
      break;
    case "toKebabCase":
      formatLog("info", textFormatter.toKebabCase(str));
      break;
    case "toPascalCase":
      formatLog("info", textFormatter.toPascalCase(str));
      break;
    case "toSnakeCase":
      formatLog("info", textFormatter.toSnakeCase(str));
      break;
  }
}

export async function cli() {
  promptForOptions();
}
