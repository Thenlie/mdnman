---
title: "ARIA: aria-busy attribute"
short-title: aria-busy
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-busy
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-busy
sidebar: accessibilitysidebar
---

The `aria-busy` attribute is a global ARIA state that indicates whether an element is currently being modified.
It helps assistive technologies understand that changes to the content are not yet complete, and that they may want to wait before informing users of the update.
While `aria-busy` is commonly used in [ARIA live regions](/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions) to delay announcements until updates are complete, it can also be used outside of live regions—for example, in widgets or feeds—to signal ongoing changes or loading.

When multiple parts of a live region need to be loaded before changes are announced to the user, set `aria-busy="true"` until loading is complete. Then set to `aria-busy="false"`. This prevents assistive technologies from announcing changes before updates are done.

## Description

There is a section of content that updates. The updates are important and you want to let the user know when it has been modified, so you have converted it into an [ARIA live region](/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions) with the [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) attribute. You may want to update several components of that section at the same time, but you can't be sure that everything will update simultaneously. Even if it is a very important live region with `aria-live="assertive"`, you don't want to interrupt the user multiple times as different parts of the content load. This is where `aria-busy` can help.

The `aria-busy` property is an optional property of live regions that can have the value `true` or `false`. The `aria-busy` attribute with a value of `true` can be added to an element currently being updated or modified, to inform the assistive technology that it should wait until the modifications or changes are complete before exposing the content to the user. Use the [`ariaBusy`](/en-US/docs/Web/API/Element/ariaBusy) property of the object to change the value to `false` when downloading is complete.

```js
ariaLiveElement.ariaBusy = "false";
```

[`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)'s value dictates whether the changes are announced immediately upon changing the value to `false`, or the assistive technology waits until the current task is complete before interrupting the user.

### Within a `feed`

If an element with [`feed`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role) role has `aria-busy` set to `true`, the rendering changes that occur inside the feed will not be announced with the exception of user-initiated changes.

### Within a `widget`

If changes to a rendered widget would create a state where the widget is missing required owned elements during script execution, set `aria-busy` to `true` on the widget during the update process. For example, if a rendered tree grid updates multiple branches not necessarily rendered simultaneously, an alternative to replacing the whole tree in a single update would be to mark the tree busy while each of the branches is modified.

## Values

- false (default):
  - : There are no expected updates for the element.
- true
  - : The element is being updated.

## Associated interfaces

- {{domxref("Element.ariaBusy")}}
  - : The [`ariaBusy`](/en-US/docs/Web/API/Element/ariaBusy) property, part of each element's interface, reflects the value of the `aria-busy` attribute, which indicates whether an element is being modified.

```html
<div
  id="clock"
  role="timer"
  aria-live="polite"
  aria-atomic="true"
  aria-busy="false"></div>
```

```js
const el = document.getElementById("clock");
console.log(el.ariaBusy); // false
el.ariaBusy = "true";
console.log(el.ariaBusy); // true
```

## Associated roles

Used in **ALL** roles

## Specifications

{{Specifications}}

## See also

- [ARIA live regions](/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions)
- [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-relevant`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-atomic`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
