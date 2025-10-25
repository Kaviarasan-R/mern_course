## Variables

[CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are defined in the
[`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) pseudo-class. Everything inherits from that, as it references the document root
(_html tag in case of HTML_).

### Syntax

```css
:root {
  --BGCOLOR: #475569;
}
```

## Dark Mode

We can also add a dark mode to our web pages with the help of media queries and variables.

### Syntax

```css
@media (prefers-color-scheme: dark) {
  :root {
    --BGCOLOR: #000;
  }
}
```

## 📚References

- 🔗 [MDN: CSS Custom Properties (Variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
