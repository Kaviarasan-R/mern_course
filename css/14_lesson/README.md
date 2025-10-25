## Grid Properties

| Property                                                                                        | Function                                                                                                                                                              |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns) | Specifies the number (and the widths) of columns in a grid layout.                                                                                                    |
| [grid-auto-rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)               | Sets a size (height) for the rows in a grid container.                                                                                                                |
| [row-gap](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap)                             | Sets the size of the gap between an element's rows.                                                                                                                   |
| [column-gap](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)                       | Sets the size of the gap between an element's columns.                                                                                                                |
| [grid-column-start](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start)         | Defines on which column-line the item will start.                                                                                                                     |
| [grid-column-end](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end)             | Defines on which column-line the item will end.                                                                                                                       |
| [grid-row-start](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start)               | Defines on which row-line the item will start.                                                                                                                        |
| [grid-row-end](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end)                   | Defines on which row-line the item will end.                                                                                                                          |
| [place-content](https://developer.mozilla.org/en-US/docs/Web/CSS/place-content)                 | Allows you to align content along both the block and inline directions at once (_i.e. the align-content and justify-content properties_)                              |
| [grid-template-areas](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)     | Specifies named [grid areas](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Areas), establishing the cells in the grid and assigning them names. (_See code_) |
| [grid-area](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)                         | Specifies a grid item's size and location in a grid layout.                                                                                                           |

## Shorthands

### grid-column

[`grid-column`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column) is a shorthand for **grid-column-start** and **grid-column-end**.

```css
grid-column: start / end;
```

**Note :** The same goes for **grid-row-start** and **grid-row-end**.

### gap

The [`gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/gap) property sets the gaps (gutters) between rows and columns. It is a shorthand for **row-gap** and **column-gap**.

```css
gap: row-gap / colum-gap;
```

## 🕹️ Learning Games

🔗 [CSS Grid Garden](https://cssgridgarden.com/)

## 📚 References

- 🔗 [MDN: Basic concepts of grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- 🔗 [MDN: CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- 🔗 [CSS Grid cheatsheet](https://grid.malven.co/)
