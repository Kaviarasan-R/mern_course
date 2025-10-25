## Selectors

There are three (03) types of basic selectors in CSS, including :

- Element selectors
- Class selectors
- ID selectors

### syntaxes

```css
/* Element selector */
body {
  font-size: 22px;
}

/* Element selector */
p {
  color: purple;
}

/* Class selector */
.gray {
  color: gray;
}

/* ID selector */
#second {
  font-style: italic;
}
```

## The Universal selector (\*)

Mainly used for a CSS reset, the universal selector selects every element on the page.

### Syntax

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

## Inheritence

**Inheritence :** is when another element inherits the properties from its parent element. For example, the `body` element is parent to all the elements on
our page, so by setting the `font-size` on it, all other elements will inherit that font-size.

### Important

- Everything related to font or typography is inherited.
- Form elements do not inherit by default.

The following syntax can be used to make form elements inherit the font properties

```css
button,
input,
textarea,
select {
  font: inherit;
}
```
