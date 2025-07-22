---
title: Getting Started
description: Installing and using MDN Man
---

## Installation

When using the Node API, you can install the package into your project's dependencies.

```zsh
npm install mdnman
```

When using the MDNMan CLI, it is recommended to install globally.

```zsh
npm install --global mdnman
```

## Usage

### Node API

```ts title="simple.ts"
import { 
    findMDNFile,
    getHeader,
    completeParse,
} from 'mdnman';

const file = await findMDNFile('foreach');
if (!file) return;
const header = getHeader(file);
if (!header) return;
const parsedFile = completeParse(file, header.slug, false);
console.log(parsedFile)
```

### CLI

Invoke the MDNMan command line interface with the `mdnman` command.

```sh
mdnman
```
```
Usage: mdnman [options] [command]

MDN reference CLI

Options:
  -h, --help              display help for command

Commands:
  js [options] <query>    Search the MDN JavaScript reference library
  html [options] <query>  Search the MDN HTML reference library
  css [options] <query>   Search the MDN CSS reference library
  interactive [options]   Use prompts to search the entire MDN reference library
  help [command]          display help for command
```

A complete command with options would look like this.

```sh
mdnman interactive --output file --path ./my-mdn-doc.md
```