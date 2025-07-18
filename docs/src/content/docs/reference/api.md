---
title: Node API
description: MDNMan Node API Reference
slug: api
---

The MDNMan Node API allows developers to integrate [MDN Web Docs](https://developer.mozilla.org/en-US/) into their own Node.js applications. This API provides programmatic access to query, parse, and render MDN documentation in a customizable format -- perfect for building dev tools, chat bot integrations, or command-line utilities.

## Querying

These methods retrieve content from the MDN reference library.

:::note
It is important to note that these methods are querying the internal MDNMan library. This means that all files are retrieved without a network call ensuring speed and reliability.
:::

### `getMDNFile`

#### Description

Get an MDN reference document based on an explicit filepath to the MDNMan library.

#### Parameters

`filepath`

> Full path to the MDNMan library. Starts with 'lib' and ends with 'index.md'.
> If 'index.md' is not attached, the function will attempt to add it to the end of the provided path.
>
> _example: 'lib///global_objects/string/split/index.md'_

#### Return Value

Either the MDN file that was found, or `null` if the path was invalid.

#### Example

```js
const file = getMDNFile('lib/javascript/global_objects/map/index.md');
if (file) {
    console.log(file);
}
```

### `findMDNFile`

#### Description

Searches the MDNMan library for a directory with a name containing the search query.
If there is a single match, that document is returned. If there are multiple matches, the user is prompted to select on.

:::caution
Since this method may prompt the user via [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) it should only be used in command line interfaces. If you would like a similar method to use outside of a CLI, try [`optimisticallyFindMDNFile`](#optimisticallyfindmdnfile)
:::

#### Parameters

`technology`

> 'javascript', 'html', or 'css'

`query`

> The search term used to query the MDNMan library

#### Return Value

Either the MDN file that was found, or `null` if no file was found with the given query.

#### Example

```js
const file = await findMDNFile('foreach');
if (file) {
    console.log(file);
}
```

### `optimisticallyFindMDNFile`

#### Description

Search the MDNMan library for a directory with a name containing the users search.
Return the contents of the file in that directory. If multiple files are found, return the first one.

#### Parameters

`technology`

> 'javascript', 'html', or 'css'

`query`

> The search term used to query the MDNMan library

#### Return Value

Either the MDN file that was found, or `null` if no file was found with the given query.

#### Example

```js
const file = ('foreach');
if (file) {
    console.log(file);
}
```

## Parsing

These methods modify or extract parts of MDN content to make it easier to render, display, or transform into different formats.

### `getSection`

#### Description

Returns a specified section of a provided MDN reference document.

#### Parameters

`document`

> The MDN reference document

`inputSection`

> An object containing defining information about the desired section
>
> _See (`#MDNSection type`)_

#### Return Value

Either the MDN section that was found, or `null` if no section was found in the provided document.

#### Example

```js
const file = await findMDNFile('foreach');
if (!file) return;
const section = getSection(file, {
    name: 'Syntax',
    level: 2,
    position: 1,
});
if (section) {
    console.log(section);
}
```

### `getNamedSection`

#### Description

Returns the first section of a provided MDN reference document that matches the provided name.

:::tip{icon=open-book}
If the document contains multiple sections with the same heading and you want to access one that isn't the first match, use [`getSection`](#getsection) instead.
:::

#### Parameters

`document`

> The MDN reference document

`sectionName`

> Name of the section to retrieve

#### Return Value

Either the MDN section that was found, or `null` if no section was found in the provided document.

#### Example

```js
const file = await findMDNFile('foreach');
if (!file) return;
const section = getNamedSection(file, 'Syntax');
if (section) {
    console.log(section);
}
```

### `getAllSections`

#### Description

Get an MDN reference document based on an explicit filepath to the MDNMan library.

#### Parameters

`filepath`

#### Example

```js
// code here
```

### `getIntroSection`

#### Description

Get an MDN reference document based on an explicit filepath to the MDNMan library.

#### Parameters

`filepath`

#### Example

```js
// code here
```

### `removeSection`

#### Description

Get an MDN reference document based on an explicit filepath to the MDNMan library.

#### Parameters

`filepath`

#### Example

```js
// code here
```

### `removeEmptySections`

#### Description

Get an MDN reference document based on an explicit filepath to the MDNMan library.

#### Parameters

`filepath`

#### Example

```js
// code here
```

### `getHeader`

#### Description

Get an MDN reference document based on an explicit filepath to the MDNMan library.

#### Parameters

`filepath`

#### Example

```js
// code here
```

### `stripHeader`

#### Description

Get an MDN reference document based on an explicit filepath to the MDNMan library.

#### Parameters

`filepath`

#### Example

```js
// code here
```

### `transformKumascript`

#### Description

Get an MDN reference document based on an explicit filepath to the MDNMan library.

#### Parameters

`filepath`

#### Example

```js
// code here
```

### `getHtmlDescription`

#### Description

Get an MDN reference document based on an explicit filepath to the MDNMan library.

#### Parameters

`filepath`

#### Example

```js
// code here
```

### `expandLinks`

#### Description

Get an MDN reference document based on an explicit filepath to the MDNMan library.

#### Parameters

`filepath`

#### Example

```js
// code here
```

### `convertEmojiTags`

#### Description

Get an MDN reference document based on an explicit filepath to the MDNMan library.

#### Parameters

`filepath`

#### Example

```js
// code here
```

### `removeTitle`

#### Description

Get an MDN reference document based on an explicit filepath to the MDNMan library.

#### Parameters

`filepath`

#### Example

```js
// code here
```

### `truncateString`

#### Description

Get an MDN reference document based on an explicit filepath to the MDNMan library.

#### Parameters

`filepath`

#### Example

```js
// code here
```

### `createChoicesFromTitles`

#### Description

Get an MDN reference document based on an explicit filepath to the MDNMan library.

#### Parameters

`filepath`

#### Example

```js
// code here
```

### `removeEmptyLines`

#### Description

Get an MDN reference document based on an explicit filepath to the MDNMan library.

#### Parameters

`filepath`

#### Example

```js
// code here
```

### `removeHiddenCodeblocks`

#### Description

Get an MDN reference document based on an explicit filepath to the MDNMan library.

#### Parameters

`filepath`

#### Example

```js
// code here
```

### `transformCodeblockLangs`

#### Description

Get an MDN reference document based on an explicit filepath to the MDNMan library.

#### Parameters

`filepath`

#### Example

```js
// code here
```

### `completeParse`

#### Description

Get an MDN reference document based on an explicit filepath to the MDNMan library.

#### Parameters

`filepath`

#### Example

```js
// code here
```
