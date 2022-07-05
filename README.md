# Example Tag Parser

A (non-production) example of parsing tags for a simple paragraph.
This parser assumes the tags will be uppercase e.g `<A>Foo</A>`.

## Documentation

This code should be run with Node 14+, preferably Node 16+.
A quick way to switch to Node v16 is with `nvm` e.g. `nvm use 16`

## Run

You can run this example directly in browser with StackBlitz: https://stackblitz.com/github/Robbie-Cook/tag-checker?file=README.md

## Run Locally

Clone the project

```bash
  git clone https://github.com/Robbie-Cook/tag-checker
```

Go to the project directory

```bash
  cd tag-checker
```

Install dependencies

```bash
  npm install
```

Run tests

```bash
  npm run test
```

Allow script to be executed

```bash
  chmod +x ./bin/command-line.js
```

Test the command line script

```bash
  ./bin/command-line.js "Hello<A></A>"
```

## Authors

- [@Robbie-Cook](https://www.github.com/Robbie-Cook)
