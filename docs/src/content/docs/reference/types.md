---
title: Types
description: MDNMan Type Reference
slug: types
---

MDNMan exposes a set of TypeScript types that help consumers work with parsed MDN Web Docs content, including document metadata, section structure, and supported language categories.

## `MDNSection`

Uniquely describes a section within an MDN document.

- `name` is the section title
- `level` is the heading level (the number of `#`)
- `position` is the number of sections above this one in the document

```ts
type MDNSection = {
    name: string;
    level: number;
    position: number;
};
```

## `MDNHeader`

The useful information from each MDN reference document's markdown header.

- `title` is the document name
- `slug` is the document path as used by MDN
- `page-type` _currently unused_
- `browser-compat` _currently unused_

```ts
type MDNHeader = {
    title: string;
    slug: string;
    'page-type'?: string;
    'browser-compat'?: string;
};
```

## `SupportedCategories`

MDNMan's supported categories of the MDN web docs.

```ts
export type SupportedCategories = 'javascript' | 'html' | 'css' | 'glossary';
```