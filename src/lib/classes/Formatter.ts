export class Formatter {
  constructor() {}

  public capitalizeFirstLetter(str: string): string {
    if (typeof str !== "string") {
      throw new Error(
        'TextFul > Expected a string for the function "capitalizeFirstLetter". Received ' +
          typeof str +
          " instead."
      );
    }

    return str[0].toUpperCase() + str.slice(1);
  }

  public jumbleWord(str: string): string {
    if (typeof str !== "string") {
      throw new Error(
        'TextFul > Expected a string for the function "jumbleWord". Received ' +
          typeof str +
          " instead."
      );
    }

    return str
      .split(" ")
      .map((letter) => {
        return this.shuffle(letter);
      })
      .join(" ");
  }

  public reverse(str: string): string {
    if (typeof str !== "string") {
      throw new Error(
        'TextFul > Expected a string for the function "reverse". Received ' +
          typeof str +
          " instead."
      );
    }

    return str.split("").reverse().join("");
  }

  public toCamelCase(str: string): string {
    if (typeof str !== "string") {
      throw new Error(
        'TextFul > Expected a string for the function "toCamelCase". Received ' +
          typeof str +
          " instead."
      );
    }

    const strToCamelCase = str.split(" ").slice(1);

    let finalStr: string = str.split(" ")[0];
    strToCamelCase.forEach((word) => {
      finalStr += this.capitalizeFirstLetter(word);
    });

    return finalStr;
  }

  public toKebabCase(str: string): string {
    return str.split(" ").join("-");
  }

  public toPascalCase(str: string): string {
    if (typeof str !== "string") {
      throw new Error(
        'TextFul > Expected a string for the function "toPascalCase". Received ' +
          typeof str +
          " instead."
      );
    }

    let strArr: string[] = str.split(" ");
    let finalStr: string = "";

    strArr.forEach((word) => {
      finalStr += this.capitalizeFirstLetter(word);
    });

    return finalStr;
  }

  public toSnakeCase(str: string): string {
    return str.split(" ").join("_");
  }

  private shuffle(str: string): string {
    let a = str.split(""),
      n = a.length;

    for (var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a.join("");
  }
}
