## List Styles

| Property                                                                                      | Function                                                                                 |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [`list-style-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)         | Sets the type of bullets or markers to use for the list (_square, lower-alpha, ...etc_). |
| [`list-style-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position) | Sets whether the bullets, at the start of each item, appear inside or outside the lists. |
| [`list-style-image`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image)       | Allows you to use a custom image for the bullet, rather than a simple square or circle.  |

The following shorthand allows us to set all three (03) properties at once : `list-style: type image position;`

## Important Notes

- The [`start`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol#attr-start) attribute can be used in the **HTML** to set where an ordered list should start counting from. (_From 1 by default_)
- The [`value`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li#attr-value) attribute can be used set the value of a list item. The following list items will increment from that number (_[See also](https://www.w3schools.com/tags/att_li_value.asp)_).

```html
<!-- Looks like the 'reversed' attribute does not respond in markdown files -->
<ol start="5" reversed>
  <li>Step One</li>
  <li value="26">Step Two</li>
  <li>Step Three</li>
</ol>
```

<ol start="5" reversed>
  <li>Step One</li>
  <li value="26">Step Two</li>
  <li>Step Three</li>
</ol>

## Configuring a list marker

We can configure a list marker by using the pseudo-element [`::marker`](https://developer.mozilla.org/en-US/docs/Web/CSS/::marker). (_See code_)

## 📚 References

- 🔗 [MDN: Styling lists](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_lists).
- 🔗 [MDN: The Ordered List Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol).
