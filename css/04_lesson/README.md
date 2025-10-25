## Box Model

The [CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) has four (04) main components, including:

| Property                                                                                                                   | Functionality                                                                                                              | Preferred Unit |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | :------------: |
| [`margin`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)                                                        | Creates space around elements, outside of any defined borders ([_See also_](https://www.w3schools.com/css/css_margin.asp)) |    em, rem     |
| [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border)                                                        | Specifies the style, width, and color of an element's border ([_See also_](https://www.w3schools.com/css/css_border.asp))  |       px       |
| [`padding`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)                                                      | Creates space around an element's content, inside of any defined borders                                                   |    em, rem     |
| [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#content_area) | The actual content of the element, such as text, an image, or a video player                                               |       NA       |

### Important

The `margin` and `padding` of an element are generally relative to its `font-size`, which is why we use relative units (em, rem) to set them.

## The CSS Reset

Given that a default margin (_relative to the element's_ `font-size`) is generally applied to block-level elements, we often need to apply a CSS reset to easily keep track of changes in the **Box Model**.

### Syntax

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

## The property box-sizing

The property `box-sizing` can take two (02) values:

- content-box (_default_)
- border-box

### content-box

The value **content-box** implies that the size (_width, height_) we are setting only accounts for the element's [`content area`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#content_area).

### border-box

The value **border-box** implies that the size we are setting includes the `border` and the `padding` (_not the margin, as it is outside the borders_). So regardless of the changes we apply, the total size (_width, height_) of the element will remain the same.

## The property outline

The property `outline` is not part of the **Box Model**. The difference between it and the `border` is that it doesn't take space but accept the same values as the border.
For more details on when to use the `outline`, check out [this tutorial](https://www.tutorialrepublic.com/css-tutorial/css-outline.php).
