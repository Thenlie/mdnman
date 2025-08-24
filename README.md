# MDNMan

JavaScript reference CLI made possible by [MDN Web Docs](https://developer.mozilla.org/en-US/).

The goal of MDN Man is to create an easy way for the MDN Web Docs to be displayed in other formats such as the command line and Discord/Slack bots. The repository features a build in command line interface as well as a number of functions that can be used to query, parse and display content from the MDN Web Docs.

## Installation

When using mdnman within a JavaScript or TypeScript project, install locally via NPM.

```sh
npm install mdnman
```

If you would like access to the CLI at all times in your terminal, install globally via NPM.

```sh
npm install --global mdnman
```

## Usage

### Command Line Interface

At it's core, mdnman is a command line interface for the MDN Web Docs. It is intended to be a quick, non-network dependent resource for web developers.

#### Commands

| Command     | Arguments        | Description                      |
|-------------|------------------|----------------------------------|
| interactive | query (string)   | Query MDN docs via prompts       |
| js          | query (string)   | Query MDN JavaScript reference   |
| html        | query (string)   | Query MDN HTML reference         |
| css         | query (string)   | Query MDN CSS reference          |
| glossary    | query (string)   | Query MDN Glossary               |
| help        | command (string) | Get help for a specific command  |

#### Options

| Option  | Flag          | Description                                        | Default | Values                    |
|---------|---------------|----------------------------------------------------|---------|---------------------------|
| Help    | -h, --help    | Get help for a given command                       | N/A     | Any command               |
| Output  | -o, --output  | Specify where the output of the command should go  | stdout  | stdout, vim, pager, file  |
| Section | -s, --section | Specify a single section of the document to return | none    | Any section heading       |

#### Examples

```sh
mdnman --help
```

```sh
mdnman js map
```

```sh
mdnman js --output vim --section parameters splice
```

### Node Package Manager

You can also install mdnman through npm to utilize it in your own project. The mdnman package comes with built in TypeScript support and exposes all utility methods built in to the CLI.

#### Quick Start

```ts
import { getMDNDoc, printDoc } from "mdnman";

const doc = await getMDNDoc('javascript', 'map')
if (doc) {
    printDoc(completeParse(doc));
}
```

## Credits

This project would not be possible without the incredible work done by the [Mozilla Team](https://github.com/mdn) on the [MDN Web Docs](https://developer.mozilla.org/en-US/).

![github-profile](https://user-images.githubusercontent.com/10350960/166113119-629295f6-c282-42c9-9379-af2de5ad4338.png)

## Questions?

If you have any questions about the project you can reach out to me via email or GitHub with the information below.

>Email: [leithen113@gmail.com](leithen113@gmail.com)
>GitHub: [Thenlie](https://github.com/Thenlie)
