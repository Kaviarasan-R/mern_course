## CSS Transform

The **transform** property lets you rotate, scale, skew, or translate an element.

### Values

| Function                                                                                         | Use                                                        |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| [`translateX()`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateX) | Moves an element horizontally (_left or right_).           |
| [`translateY()`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateY) | Moves an element vertically (_up or down_).                |
| [`rotateX()`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateX)       | Rotates an element around the horizontal axis.             |
| [`rotateY()`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateY)       | Rotates an element around the vertical axis.               |
| [`rotateZ()`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateZ)       | Rotates an element around the Z-axis (_clockwise_).        |
| [`scaleX()`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scaleX)         | Resizes an element along the x-axis (_horizontally_).      |
| [`scaleY()`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scaleY)         | Resizes an element along the y-axis (_vertically_).        |
| [`skewX()`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skewX)           | Makes the item look like a parallelogram along the x-axis. |
| [`skewY()`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skewY)           | Makes the item look like a parallelogram along the y-axis. |

### Shorthands

```css
transform: translate(X, Y) /* for translateX() and translateY() */
transform: scale(X, Y)     /* for scaleX() and scaleY() */
transform: skew(X, Y)      /* for skewX() and skewY() */
```

## CSS Transitions

**CSS transitions** provide a way to control animation speed when changing CSS properties.

### Transition sub-properties

| Property                                                                                                    | Use                                                                                                   |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [`transition-property`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property)               | Specifies the name or names of the CSS properties to which transitions should be applied.             |
| [`transition-duration`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration)               | Sets the length of time a transition animation should take to complete.                               |
| [`transition-delay`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay)                     | Specifies the duration to wait before starting a property's transition effect when its value changes. |
| [`transition-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) | Sets how intermediate values are calculated for CSS properties being affected by a transition effect. |

### Shorthand

```css
selector {
  transition: property duration delay;
  transition: property duration timing-function delay;
}
```

## CSS Animations

**CSS animations** make it possible to animate transitions from one CSS style configuration to another.

### Animation sub-properties

| Property                                                                                                  | Use                                                                                       |
| --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`animation-name`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name)                       | Specifies the name of the @keyframes at-rule describing an animation's keyframes.         |
| [`animation-duration`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration)               | Sets the length of time that an animation takes to complete one cycle.                    |
| [`animation-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function) | Sets how an animation progresses through the duration of each cycle.                      |
| [`animation-delay`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay)                     | Specifies the amount of time to wait before beginning to perform the animation.           |
| [`animation-iteration-count`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count) | Specifies the number of times an animation should repeat.                                 |
| [`animation-direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction)             | Defines whether an animation should be played forwards, backwards or in alternate cycles. |
| [`animation-fill-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode)             | Specifies how an animation applies styles to its target before and after it runs.         |

### Shorthand

```css
selector {
  animation: name duration timing-function delay fill-mode;
  animation: duration timing-function delay iteration-count direction fill-mode
    name;
}
```

## 📚 References

- 🔗 [MDN: CSS Transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- 🔗 [MDN: CSS Transition](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- 🔗 [MDN: CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
