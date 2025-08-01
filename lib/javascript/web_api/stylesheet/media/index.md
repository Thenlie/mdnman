---
title: "StyleSheet: media property"
short-title: media
slug: Web/API/StyleSheet/media
page-type: web-api-instance-property
browser-compat: api.StyleSheet.media
---

{{APIRef("CSSOM")}}

The **`media`** property of the {{domxref("StyleSheet")}} interface specifies the intended destination media for style information. It is a read-only, array-like `MediaList` object and can be removed with `deleteMedium()` and added with `appendMedium()`.

## Value

A read-only array-like `MediaList` object.

## Examples

Assume the `<head>` contains the following:

```html
<link rel="stylesheet" href="document.css" media="screen" />
<style rel="stylesheet" media="screen, print">
  body {
    background-color: snow;
  }
</style>
```

Then:

```js
for (let i = 0; i < document.styleSheets.length; i++) {
  console.log(
    `document.styleSheets[${i}].media: ${JSON.stringify(
      document.styleSheets[i].media,
    )}`,
  );
  if (i === 0) document.styleSheets[i].media.appendMedium("handheld");
  if (i === 1) document.styleSheets[i].media.deleteMedium("print");
  console.log(
    `document.styleSheets[${i}].media: ${JSON.stringify(
      document.styleSheets[i].media,
    )}`,
  );
}
// This will log:
// document.styleSheets[0].media: {"0":"screen"}
// document.styleSheets[0].media: {"0":"screen","1":"handheld"}
// document.styleSheets[1].media: {"0":"screen","1":"print"}
// document.styleSheets[1].media: {"0":"screen"}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
