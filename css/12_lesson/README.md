## Positions

The [`position`](https://developer.mozilla.org/en-US/docs/Web/CSS/position) property sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of
positioned elements.

The element is positioned relative to its closest positioned ancestor, if any; otherwise, it is placed relative to the initial containing block.

## Types of positioning

The different types of positioning include:

| Position     | Behavior                                                                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **static**   | The element is positioned according to the normal flow of the document. (_default_)                                                        |
| **absolute** | The element is relative to the browser window, unless one of its parent containers is positioned `relative`.                               |
| **relative** | The element is always positioned relative to its closest ancestor.                                                                         |
| **fixed**    | The element is always positioned relative to the browser window.                                                                           |
| **sticky**   | The element is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed). |

## References

- 🔗 [MDN: Position](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning)
