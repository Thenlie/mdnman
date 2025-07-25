---
title: "<form>: The Form element"
slug: Web/HTML/Reference/Elements/form
page-type: html-element
browser-compat: html.elements.form
---

{{HTMLSidebar}}

The **`<form>`** [HTML](/en-US/docs/Web/HTML) element represents a document section containing interactive controls for submitting information.

{{InteractiveExample("HTML Demo: &lt;form&gt;", "tabbed-standard")}}

```html interactive-example
<form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required />
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required />
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!" />
  </div>
</form>
```

```css interactive-example
form.form-example {
  display: table;
}

div.form-example {
  display: table-row;
}

label,
input {
  display: table-cell;
  margin-bottom: 10px;
}

label {
  padding-right: 10px;
}
```

It is possible to use the {{cssxref(':valid')}} and {{cssxref(':invalid')}} CSS [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes) to style a `<form>` element based on whether the {{domxref("HTMLFormElement.elements", "elements")}} inside the form are valid.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes).

- `accept` {{deprecated_inline}}
  - : Comma-separated [content types](/en-US/docs/Web/SVG/Guides/Content_type) the server accepts.

    > [!NOTE]
    > **This attribute has been deprecated and should not be used.** Instead, use the [`accept`](/en-US/docs/Web/HTML/Reference/Elements/input#accept) attribute on `<input type=file>` elements.

- `accept-charset`
  - : The {{Glossary("character encoding")}} accepted by the server.
    The specification allows a single case-insensitive value of `"UTF-8"`, reflecting the ubiquity of this encoding (historically multiple character encodings could be specified as a comma-separated or space-separated list).

- `autocapitalize`
  - : Controls whether inputted text is automatically capitalized and, if so, in what manner. See the [`autocapitalize`](/en-US/docs/Web/HTML/Reference/Global_attributes/autocapitalize) global attribute page for more information.

- [`autocomplete`](/en-US/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Indicates whether input elements can by default have their values automatically completed by the browser. `autocomplete` attributes on form elements override it on `<form>`. Possible values:
    - `off`: The browser may not automatically complete entries. (Browsers tend to ignore this for suspected login forms; see [Managing autofill for login fields](/en-US/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).)
    - `on`: The browser may automatically complete entries.

- `name`
  - : The name of the form. The value must not be the empty string, and must be unique among the `form` elements in the forms collection that it is in, if any. The name becomes a property of the {{domxref("Window")}}, {{domxref("Document")}}, and {{domxref("document.forms")}} objects, containing a reference to the form element.

- [`rel`](/en-US/docs/Web/HTML/Reference/Attributes/rel)
  - : Controls the annotations and what kinds of links the form creates. Annotations include [`external`](/en-US/docs/Web/HTML/Reference/Attributes/rel#external), [`nofollow`](/en-US/docs/Web/HTML/Reference/Attributes/rel#nofollow), [`opener`](/en-US/docs/Web/HTML/Reference/Attributes/rel#opener), [`noopener`](/en-US/docs/Web/HTML/Reference/Attributes/rel#noopener), and [`noreferrer`](/en-US/docs/Web/HTML/Reference/Attributes/rel#noreferrer). Link types include [`help`](/en-US/docs/Web/HTML/Reference/Attributes/rel#help), [`prev`](/en-US/docs/Web/HTML/Reference/Attributes/rel#prev), [`next`](/en-US/docs/Web/HTML/Reference/Attributes/rel#next), [`search`](/en-US/docs/Web/HTML/Reference/Attributes/rel#search), and [`license`](/en-US/docs/Web/HTML/Reference/Attributes/rel#license). The [`rel`](/en-US/docs/Web/HTML/Reference/Attributes/rel) value is a space-separated list of these enumerated values.

### Attributes for form submission

The following attributes control behavior during form submission.

- `action`
  - : The URL that processes the form submission. This value can be overridden by a [`formaction`](/en-US/docs/Web/HTML/Reference/Elements/button#formaction) attribute on a {{HTMLElement("button")}}, [`<input type="submit">`](/en-US/docs/Web/HTML/Reference/Elements/input/submit), or [`<input type="image">`](/en-US/docs/Web/HTML/Reference/Elements/input/image) element. This attribute is ignored when `method="dialog"` is set.
- `enctype`
  - : If the value of the `method` attribute is `post`, `enctype` is the [MIME type](https://en.wikipedia.org/wiki/Mime_type) of the form submission. Possible values:
    - `application/x-www-form-urlencoded`: The default value.
    - `multipart/form-data`: Use this if the form contains {{HTMLElement("input")}} elements with `type=file`.
    - `text/plain`: Useful for debugging purposes.

    This value can be overridden by [`formenctype`](/en-US/docs/Web/HTML/Reference/Elements/button#formenctype) attributes on {{HTMLElement("button")}}, [`<input type="submit">`](/en-US/docs/Web/HTML/Reference/Elements/input/submit), or [`<input type="image">`](/en-US/docs/Web/HTML/Reference/Elements/input/image) elements.

- `method`
  - : The [HTTP](/en-US/docs/Web/HTTP) method to submit the form with.
    The only allowed methods/values are (case insensitive):
    - `post`: The {{HTTPMethod("POST")}} method; form data sent as the [request body](/en-US/docs/Web/API/Request/body).
    - `get` (default): The {{HTTPMethod("GET")}}; form data appended to the `action` URL with a `?` separator. Use this method when the form [has no side effects](/en-US/docs/Glossary/Idempotent).
    - `dialog`: When the form is inside a {{HTMLElement("dialog")}}, closes the dialog and causes a `submit` event to be fired on submission, without submitting data or clearing the form.

    This value is overridden by [`formmethod`](/en-US/docs/Web/HTML/Reference/Elements/button#formmethod) attributes on {{HTMLElement("button")}}, [`<input type="submit">`](/en-US/docs/Web/HTML/Reference/Elements/input/submit), or [`<input type="image">`](/en-US/docs/Web/HTML/Reference/Elements/input/image) elements.

- `novalidate`
  - : This Boolean attribute indicates that the form shouldn't be validated when submitted. If this attribute is not set (and therefore the form **_is_** validated), it can be overridden by a [`formnovalidate`](/en-US/docs/Web/HTML/Reference/Elements/button#formnovalidate) attribute on a {{HTMLElement("button")}}, [`<input type="submit">`](/en-US/docs/Web/HTML/Reference/Elements/input/submit), or [`<input type="image">`](/en-US/docs/Web/HTML/Reference/Elements/input/image) element belonging to the form.
- `target`
  - : Indicates where to display the response after submitting the form. It is a name/keyword for a _browsing context_ (for example, tab, window, or iframe). The following keywords have special meanings:
    - `_self` (default): Load into the same browsing context as the current one.
    - `_blank`: Load into a new unnamed browsing context. This provides the same behavior as setting [`rel="noopener"`](#rel) which does not set [`window.opener`](/en-US/docs/Web/API/Window/opener).
    - `_parent`: Load into the parent browsing context of the current one. If no parent, behaves the same as `_self`.
    - `_top`: Load into the top-level browsing context (i.e., the browsing context that is an ancestor of the current one and has no parent). If no parent, behaves the same as `_self`.
    - `_unfencedTop`: Load the response from a form inside an embedded [fenced frame](/en-US/docs/Web/API/Fenced_frame_API) into the top-level frame (i.e., traversing beyond the root of the fenced frame, unlike other reserved destinations). Only available inside fenced frames.

    This value can be overridden by a [`formtarget`](/en-US/docs/Web/HTML/Reference/Elements/button#formtarget) attribute on a {{HTMLElement("button")}}, [`<input type="submit">`](/en-US/docs/Web/HTML/Reference/Elements/input/submit), or [`<input type="image">`](/en-US/docs/Web/HTML/Reference/Elements/input/image) element.

## Examples

```html
<!-- Form which will send a GET request to the current URL -->
<form method="get">
  <label>
    Name:
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button>Save</button>
</form>

<!-- Form which will send a POST request to the current URL -->
<form method="post">
  <label>
    Name:
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button>Save</button>
</form>

<!-- Form with fieldset, legend, and label -->
<form method="post">
  <fieldset>
    <legend>Do you agree to the terms?</legend>
    <label><input type="radio" name="radio" value="yes" /> Yes</label>
    <label><input type="radio" name="radio" value="no" /> No</label>
  </fieldset>
</form>
```

### Result

{{EmbedLiveSample('Examples')}}

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories">Content categories</a>
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#flow_content">Flow content</a>,
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#palpable_content">palpable content</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#flow_content">Flow content</a>, but not containing <code>&#x3C;form></code> elements
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None, both the starting and ending tag are mandatory.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#flow_content">flow content</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <code><a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/form_role">form</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        <code><a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/search_role">search</a></code>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
         or <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLFormElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML forms guide](/en-US/docs/Learn_web_development/Extensions/Forms)
- Other elements that are used when creating forms: {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}.
- Getting a list of the elements in the form: {{domxref("HTMLFormElement.elements")}}
- [ARIA: Form role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)
- [ARIA: Search role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
