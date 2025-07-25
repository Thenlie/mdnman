---
title: "<picture>: The Picture element"
slug: Web/HTML/Reference/Elements/picture
page-type: html-element
browser-compat: html.elements.picture
---

{{HTMLSidebar}}

The **`<picture>`** [HTML](/en-US/docs/Web/HTML) element contains zero or more {{HTMLElement("source")}} elements and one {{HTMLElement("img")}} element to offer alternative versions of an image for different display/device scenarios.

The browser will consider each child `<source>` element and choose the best match among them. If no matches are found—or the browser doesn't support the `<picture>` element—the URL of the `<img>` element's [`src`](/en-US/docs/Web/HTML/Reference/Elements/img#src) attribute is selected. The selected image is then presented in the space occupied by the `<img>` element.

{{InteractiveExample("HTML Demo: &lt;picture&gt;", "tabbed-standard")}}

```html interactive-example
<!--Change the browser window width to see the image change.-->

<picture>
  <source
    srcset="/shared-assets/images/examples/surfer.jpg"
    media="(orientation: portrait)" />
  <img src="/shared-assets/images/examples/painted-hand.jpg" alt="" />
</picture>
```

To decide which URL to load, the {{Glossary("user agent")}} examines each `<source>`'s [`srcset`](/en-US/docs/Web/HTML/Reference/Elements/source#srcset), [`media`](/en-US/docs/Web/HTML/Reference/Elements/source#media), and [`type`](/en-US/docs/Web/HTML/Reference/Elements/source#type) attributes to select a compatible image that best matches the current layout and capabilities of the display device.

The `<img>` element serves two purposes:

1. It describes the size and other attributes of the image and its presentation.
2. It provides a fallback in case none of the offered `<source>` elements are able to provide a usable image.

Common use cases for `<picture>`:

- **Art direction.** Cropping or modifying images for different `media` conditions (for example, loading a simpler version of an image which has too many details, on smaller displays).
- **Offering alternative image formats**, for cases where certain formats are not supported.

  > [!NOTE]
  > For example, newer formats like [AVIF](/en-US/docs/Web/Media/Guides/Formats/Image_types#avif_image) or [WEBP](/en-US/docs/Web/Media/Guides/Formats/Image_types#webp_image) have many advantages, but might not be supported by the browser. A list of supported image formats can be found in: [Image file type and format guide](/en-US/docs/Web/Media/Guides/Formats/Image_types).

- **Saving bandwidth and speeding page load times** by loading the most appropriate image for the viewer's display.

If providing higher-density versions of an image for high-DPI (Retina) display, use [`srcset`](/en-US/docs/Web/HTML/Reference/Elements/img#srcset) on the `<img>` element instead. This lets browsers opt for lower-density versions in data-saving modes, and you don't have to write explicit `media` conditions.

## Attributes

This element includes only [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes).

## Usage notes

You can use the {{cssxref("object-position")}} property to adjust the positioning of the image within the element's frame, and the {{cssxref("object-fit")}} property to control how the image is resized to fit within the frame.

> [!NOTE]
> Use these properties on the child `<img>` element, **not** the `<picture>` element.

## Examples

These examples demonstrate how different attributes of the {{HTMLElement("source")}} element change the selection of the image inside `<picture>`.

### The media attribute

The `media` attribute specifies a media condition (similar to a media query) that the user agent will evaluate for each {{HTMLElement("source")}} element.

If the {{HTMLElement("source")}}'s media condition evaluates to `false`, the browser skips it and evaluates the next element inside `<picture>`.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(width >= 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

### The srcset attribute

The [srcset](/en-US/docs/Web/HTML/Reference/Elements/source#srcset) attribute is used to offer a list of possible images based on size or the display's pixel density.

It is composed of a comma-separated list of image descriptors. Each image descriptor is composed of a URL of the image, and _either_:

- a _width descriptor_, followed by a `w` (such as `300w`);
  _OR_
- a _pixel density descriptor_, followed by an `x` (such as `2x`) to serve a high-res image for high-DPI screens.

Make sure to note that:

- width and pixel density descriptors should not be used together
- a missing pixel density descriptor implies 1x
- duplicate descriptor values are not allowed (2x & 2x, 100w & 100w)

The following example illustrates the usage of `srcset` attribute with the `<source>` element to specify a high-density and standard-resolution image:

```html
<picture>
  <source srcset="logo.png, logo-1.5x.png 1.5x" />
  <img src="logo.png" alt="MDN Web Docs logo" height="320" width="320" />
</picture>
```

The `srcset` attribute can also be used on the `<img>` element without needing the `<picture>` element. The following example demonstrates how to use the `srcset` attribute to specify standard-resolution and high-density images, respectively:

```html
<img
  srcset="logo.png, logo-2x.png 2x"
  src="logo.png"
  height="320"
  width="320"
  alt="MDN Web Docs logo" />
```

The `sizes` attribute is not mandatory when using srcset, but it is recommended to use it in order to provide additional information to the browser to help it select the best image source.

Without sizes, the browser will use the default size of the image as specified by its dimensions in pixels. This may not be the best fit for all devices, especially if the image is displayed on different screen sizes or in different contexts.

Please note that sizes will have its effect only if width dimension descriptors are provided with srcset instead of pixel ratio values (200w instead of 2x for example).
For more information on using `srcset`, see the [Responsive images](/en-US/docs/Web/HTML/Guides/Responsive_images) documentation.

### The type attribute

The `type` attribute specifies a [MIME type](/en-US/docs/Web/HTTP/Guides/MIME_types) for the resource URL(s) in the {{HTMLElement("source")}} element's `srcset` attribute. If the user agent does not support the given type, the {{HTMLElement("source")}} element is skipped.

```html
<picture>
  <source srcset="photo.avif" type="image/avif" />
  <source srcset="photo.webp" type="image/webp" />
  <img src="photo.jpg" alt="photo" />
</picture>
```

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow content</a
        >, phrasing content, embedded content
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        Zero or more {{HTMLElement("source")}} elements, followed by one
        {{HTMLElement("img")}} element, optionally intermixed with
        script-supporting elements.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None, both the starting and ending tag are mandatory.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>Any element that allows embedded content.</td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >No corresponding role</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLPictureElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("img")}} element
- {{HTMLElement("source")}} element
- Positioning and sizing the picture within its frame: {{cssxref("object-position")}} and {{cssxref("object-fit")}}
- [Image file type and format guide](/en-US/docs/Web/Media/Guides/Formats/Image_types)
