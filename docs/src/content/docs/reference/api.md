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
> _example: 'lib/javascript/global_objects/string/split/index.md'_

#### Return Value

Either the MDN file that was found, or `null` if the path was invalid.

#### Example Usage

```js "getMDNFile"
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
>
> _See [`SupportedLanguages`](#supportedlanguages)_

`query`

> The search term used to query the MDNMan library

#### Return Value

Either the MDN file that was found, or `null` if no file was found with the given query.

#### Example Usage

```js "findMDNFile"
const file = await findMDNFile('javascript', 'foreach');
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
>
> _See [`SupportedLanguages`](#supportedlanguages)_

`query`

> The search term used to query the MDNMan library

#### Return Value

Either the MDN file that was found, or `null` if no file was found with the given query.

#### Example Usage

```js "optimisticallyFindMDNFile"
const file = optimisticallyFindMDNFile('css', 'font-family');
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
> _See ([`MDNSection`](#mdnsection) type)_

#### Return Value

Either the MDN section that was found, or `null` if no section was found in the provided document.

#### Example Usage

```js "getSection"
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

#### Example Usage

```js "getNamedSection"
const file = await findMDNFile('foreach');
if (!file) return;
const section = getNamedSection(file, 'Syntax');
if (section) {
    console.log(section);
}
```

### `getAllSections`

#### Description

Returns a list of all sections in a provided MDN reference document.

#### Parameters

`document`

> The MDN reference document to be parsed

#### Return value

A list of all sections in the provided document. If no sections are found, an empty list is returned.

_See ([`#MDNSection`](#mdnsection) type)_

#### Example Usage

```js "getAllSection"
const file = await findMDNFile('foreach');
if (!file) return;
const sections = getAllSections(file);
sections.forEach(section => console.log(section.name))
```

### `getIntroSection`

#### Description

Returns the introduction text of a provided MDN reference document. This is all the text until the  first section heading.

#### Parameters

`document`

> The MDN reference document

#### Return Value

All the text in the MDN reference document up to the first section heading. Does not include the page header.

#### Example Usage

```js "getIntroSection"
const file = await findMDNFile('foreach');
if (!file) return;
const intro = getIntroSection(file);
console.log(intro);
```

### `removeSection`

#### Description

Removes a single section for the provided MDN reference document and returns the updated document.

:::caution
This method will remove the first section with a matching name. If the document contains duplicate sections, only the first section will be removed.
:::

#### Parameters

`document`

> The MDN reference document

`sectionName`

> The name of the section to remove

#### Return Value

The MDN reference document with the named section removed. If the section is not found, the document is returned un-changed.

#### Example Usage

```js "removeSection"
const file = await findMDNFile('foreach');
if (!file) return;
const trimmedFile = removeSection(file, 'See Also');
console.log(trimmedFile);
```

### `removeEmptySections`

#### Description

Removes all sections that have no inner content from an MDN reference document and returns the updated document.

#### Parameters

`document`

> The MDN reference document

#### Return Value

The MDN reference document with empty sections removed. If no empty sections are found, the document is returned un-changed.

#### Example Usage

```js "removeEmptySections"
const file = await findMDNFile('foreach');
if (!file) return;
const trimmedFile = removeEmptySections(file);
console.log(trimmedFile);
```

### `getHeader`

#### Description

Parses the markdown style header from a provided MDN reference document and returns an object containing the useful information from it.

#### Parameters

`document`

> The MDN reference document

#### Return Value

An object containing useful information from the documents header. If no header is found, `null` is returned.

_See ([`#MDNHeader`](#mdnheader) type)_

#### Example Usage

```js "getHeader"
const file = await findMDNFile('foreach');
if (!file) return;
const header = getHeader(file);
if (header) {
    console.log(header.title)
}
```

### `stripHeader`

#### Description

Removes the markdown style header from a provided MDN reference document

#### Parameters

`document`

> The MDN reference document

`addHeading`

> Adds an H1 markdown heading with the header title when true. Defaults to `true`.

#### Return Value

The MDN reference document with the header removed. If no header is found, the document is returned un-changed.

#### Example Usage

```js "stripHeader"
const file = await findMDNFile('foreach');
if (!file) return;
const trimmedFile = stripHeader(file, false);
console.log(trimmedFile)
```

### `transformKumascript`

#### Description

Replaces Kumascript macros with human readable text and/or links. Most basic macros such as internal MDN links are handled. If they are not, the macro is removed from the document.

_example:_ {{cssxref("div")}} → `div`

:::tip{icon=open-book}
"Kumascript" is a template/macro system used on the MDN web docs. You can read more about it in the [mdn docs](https://github.com/mdn/yari/tree/main/docs/kumascript).
:::

#### Parameters

`document`

> The MDN reference document

`addLinks`

> Replaces Kumascript macros with a markdown link when `true`. Replaces with text when `false`.

#### Return value

The MDN reference document with Kumascript macros transformed.

#### Example Usage

```js "transformKumascript"
const file = await findMDNFile('foreach');
if (!file) return;
const parsedFile = transformKumascript(file, false);
console.log(parsedFile)
```

### `expandLinks`

#### Description

Converts all shortened MDN links into full URLs

#### Parameters

`document`

> The MDN reference document

`slug`

> The `document`'s header slug. Can be retrieved with [getHeader](#getheader)

#### Return Value

The updated MDN reference document

#### Example Usage

```js
const file = await findMDNFile('foreach');
if (!file) return;
const header = getHeader(file);
if (!header) return;
const parsedFile = expandLinks(file, header.slug);
console.log(parsedFile)
```

### `convertEmojiTags`

#### Description

Converts markdown style emoji tags into real emojis.

_example:_ [!Warning] → ⚠️

#### Parameters

`document`

> The MDN reference document

#### Return Value

The updated MDN reference document

#### Example Usage

```js
const file = await findMDNFile('foreach');
if (!file) return;
const parsedFile = convertEmojiTags(file);
console.log(parsedFile)
```

### `removeTitle`

#### Description

Get an MDN reference document based on an explicit filepath to the MDNMan library.

#### Parameters

`filepath`

#### Example Usage

```js
// code here
```

### `truncateString`

#### Description

Get an MDN reference document based on an explicit filepath to the MDNMan library.

#### Parameters

`filepath`

#### Example Usage

```js
// code here
```

### `createChoicesFromTitles`

#### Description

Get an MDN reference document based on an explicit filepath to the MDNMan library.

#### Parameters

`filepath`

#### Example Usage

```js
// code here
```

### `removeEmptyLines`

#### Description

Get an MDN reference document based on an explicit filepath to the MDNMan library.

#### Parameters

`filepath`

#### Example Usage

```js
// code here
```

### `removeHiddenCodeblocks`

#### Description

Get an MDN reference document based on an explicit filepath to the MDNMan library.

#### Parameters

`filepath`

#### Example Usage

```js
// code here
```

### `transformCodeblockLangs`

#### Description

Get an MDN reference document based on an explicit filepath to the MDNMan library.

#### Parameters

`filepath`

#### Example Usage

```js
// code here
```

### `completeParse`

#### Description

Get an MDN reference document based on an explicit filepath to the MDNMan library.

#### Parameters

`filepath`

#### Example Usage

```js
// code here
```

## Types

### `MDNSection`

### `MDNHeader`

### `SupportedLanguages`
