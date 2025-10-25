## Pseudo Selectors

**Pseudo-class** is selector that selects elements that are in a specific state.

**Pseudo-selectors** include both [Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
and [Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements).

### Some pseudo-classes

| Name                                                                        | Function                                                                                                                  |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| [`:is`](https://developer.mozilla.org/en-US/docs/Web/CSS/:is)               | Takes a selector list as its argument, and selects any element that can be selected by one of the selectors in that list. |
| [`:any-link`](https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link)   | Matches an element if the element would match either `:link` or `:visited`.                                               |
| [`:where`](https://developer.mozilla.org/en-US/docs/Web/CSS/:where)         | Takes a selector list as its argument, and selects any element that can be selected by one of the selectors in that list. |
| [`:target`](https://developer.mozilla.org/en-US/docs/Web/CSS/:target)       | Matches the element which is the target of the document URL.                                                              |
| [`:not`](https://developer.mozilla.org/en-US/docs/Web/CSS/:not)             | Matches every element that is NOT the specified element/selector.                                                         |
| [`:nth-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child) | Matches elements based on their position among a group of siblings.                                                       |

## Pseudo-elements

A **Pseudo-element** is a keyword added to a selector that lets you style a specific part of the selected element(s).

### Some pseudo-elements

| Name                                                                                | Function                                                                       |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [`::after`](https://developer.mozilla.org/en-US/docs/Web/CSS/::after)               | Inserts something after the content of each selected element(s).               |
| [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before)             | Inserts something before the content of each selected element(s).              |
| [`::first-letter`](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter) | Applies styles to the first letter of the first line of a block-level element. |
| [`::first-line`](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line)     | Applies styles to the first line of a block-level element.                     |

## 📚 References

- 🔗 [MDN: CSS List of Pseudo-Classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
- 🔗 [MDN: CSS List of Pseudo-Elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
- 🔗 [MDN: CSS Pseudo-Classes and Pseudo-Elements](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
