# TextFul

A useful and modular NPM package in formatting string literals.

## Why?

It can take a lot of time to build your own functions even to convert a string to camelcase. To avoid this hectic process, textful was born.

## Installation

Run this command in your terminal to install textful.

```shell
npm i textful
```

## Usage

You can either use the cli or import textful in your file.

### CLI

Run this command in your terminal and it will ask you for some input and give the output accordingly. You can even use the CLI by running `npx textful`

```shell
textful
```

### In file

#### Convert a string to snake_case.

**Javascript:**

```javascript
const textful = require("textful");
const textFormatter = new textful.Formatter();

console.log(textFormatter.toSnakeCase("Hello World!"));
```

**Typescript:**

```typescript
import textful from "textful";
const textFormatter = new textful.Formatter();

console.log(textFormatter.toSnakeCase("Hello World!"));
```

## Documentation

The documentation for this project is currently a work in progress and will be soon available at https://textful.aktindo.me

## Support/Feature Requests

To get support, or if you are stuck somewhere, simply join our [Discord server](https://aktindo.me/discord) and someone will help you out.

For feature requests, open an issue on our Github Repository.

## Contributing

If you feel like contributing to this project, you can make the desired changes and open a PR on our GitHub repository. We appreciate your effort in making this project a success.
