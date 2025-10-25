## Flexbox

[Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) is a one-dimensional layout method for arranging items in rows or columns.

### Syntax to make an element a flex container

```css
.container {
  display: flex;
}
```

## Flex Properties

| Property                                                                            | Function                                                                                                                                                                               |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) | Defines how the browser distributes space between and around content items along the main-axis of a flex container.                                                                    |
| [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)         | Controls the alignment of items on the Cross Axis.                                                                                                                                     |
| [flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)   | Sets how flex items are placed in the flex container defining the main axis and the direction (_normal or reversed_).                                                                  |
| [flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)             | Sets whether flex items are forced onto one line or can wrap onto multiple lines.                                                                                                      |
| [align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)     | It is similar to **align-items**, but instead of aligning flex items, it aligns flex lines.<br> **Note :** There must be multiple lines of items for this property to have any effect! |
| [flex-basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)           | Sets the initial main size of a flex item.                                                                                                                                             |
| [flex-grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)             | Sets the flex grow factor of a flex item's main size.                                                                                                                                  |
| [flex-shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)         | Sets the flex shrink factor of a flex item. (_Remember to set_ `flex-wrap` _to_ **_nowrap_**).                                                                                         |
| [gap](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)                         | Sets the gaps between flex-items. (_Mostly used with grids_)                                                                                                                           |
| [order](https://developer.mozilla.org/en-US/docs/Web/CSS/order)                     | Sets the order to lay out an item in a flex or grid container.                                                                                                                         |

## Shorthands

### flex-flow

[`flex-flow`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow) is the shorthand for **flex-direction** and **flex-wrap**.

```css
.container {
  flex-flow: row wrap; /* flex-flow: direction wrap-behavior */
}
```

### flex

[`flex`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) is the shorthand for **flex-grow**, **flex-shrink**, and **flex-basis**.

```css
.item {
  flex: 1 1 250px; /* flex: grow shrink basis */
}
```

## 🕹️ Learning Games

🔗 [Flexbox Froggy](https://flexboxfroggy.com/)

## 📚 References

- 🔗 [MDN: CSS Flexible Box Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- 🔗 [Stack Overflow: differences between flex basis and width](https://stackoverflow.com/questions/34352140/what-are-the-differences-between-flex-basis-and-width)
