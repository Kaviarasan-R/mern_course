## Display Property

The [`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display) property sets whether an element is treated as a block or inline element and the layout
used for its children, such as flow layout, grid or flex.

In this chapter, we are only going to talk about **block** and **inline**. **Flexbox** and **Grid** will be covered in upcoming chapters.

## Important

### For block level elements

- Block level elements have a 100% width by default (_not necessarily 100% of the viewport but 100% of what is available to them_).

### For inline level elements

- Inline elements take the width of their content.
- We can't apply a top or bottom `margin` to an inline elememt.
- We can't apply a `height` to an inline element.
- This can be solved by setting the `display` property to **inline-block**.
- The **inline-block** comes in handy when we want to style a link into a button or turn a list into a row (_Ex: In a nav menu_).

The property `margin-inline` only applies some margin to the left and to right.

## 📚 References

- 🔗 [MDN: Display Property](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
