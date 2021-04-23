import chalk from "chalk";

export default (type: "info" | "error", str: string) => {
  if (type === "info") {
    console.log(chalk.blueBright(">") + " " + str);
  } else if (type === "error") {
    console.log(chalk.redBright(">") + " " + str);
  }
};
