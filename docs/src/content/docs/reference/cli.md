---
title: Command Line Interface
description: MDNMan Command Line Interface Reference
slug: cli
---

The MDNMan CLI allows developers to quickly access and explore the [MDN Web Docs](https://developer.mozilla.org/en-US/) reference library directly from the command line. This tool is ideal for looking up JavaScript, HTML, and CSS documentation without leaving your terminal.

## `js`, `html`, `css`

### Description

These commands search the MDN reference documentation for JavaScript (`js`), HTML (`html`), or CSS (`css`) topics, respectively. Each command accepts the same set of options and returns relevant documentation entries based on the search query provided.

### Options

| Option&nbsp;Name | Alias | Default Value | Description                                                                                                                     |
| ---------------- | ----- | ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `--output`       | `-o`  | `stdout`      | Specifies the format in which to return the MDN documentation. Supported formats include `stdout`, `file`, and `vim`.           |
| `--section`      | `-s`  | none          | Limits the result to a specific section of the documentation (e.g., `syntax`, `examples`, `specifications`).                    |
| `--path`         | `-p`  | `./ref`       | Writes the output to the specified file path instead of displaying it in the terminal. Useful for saving documentation locally. |
| `--help`         | `-h`  | none          | Displays help information and usage details for the selected command.                                                           |

### Example Usage

```sh
mdnman js foreach
mdnman html div --output file --path my/custom/path
mdnman css font-family --output vim --section syntax
```

## `interactive`

Launches an interactive mode that lets you search and browse the MDN reference library through a guided, prompt-based interface.

### Options

| Option&nbsp;Name | Alias | Default Value | Description                                                                                                                     |
| ---------------- | ----- | ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `--output`       | `-o`  | `stdout`      | Specifies the format in which to return the MDN documentation. Supported formats include `pager`, `stdout`, `file`, and `vim.`  |
| `--path`         | `-p`  | `./ref`       | Writes the output to the specified file path instead of displaying it in the terminal. Useful for saving documentation locally. |
| `--help`         | `-h`  | none          | Displays help information and usage details for the selected command.                                                           |

### Example Usage

```sh
mdnman interactive --output file --path my/custom/path
```
