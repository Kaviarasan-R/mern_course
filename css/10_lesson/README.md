## Floats

The [`float`](https://developer.mozilla.org/en-US/docs/Web/CSS/float) property places an element on the left or right side of its container, allowing text and inline
elements to wrap around it.<br><br>

### Wrapping Text

To wrap only the first paragraph of a text around a floating element, we can use three (03) different methods:

- Adding a **div** with a class "clear" and set the property `clear` to **both**.
- Set the `overflow` property to **auto**.
- Set the `display` property to **flow-root**. (_Recommended_)

## Syntaxes

### 1. Adding a `div` with a class "clear"

#### HTML

```html
<section>
  <div class="block left">Float</div>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet obcaecati
    repudiandae alias laboriosam soluta cumque itaque, reiciendis sit ab modi.
  </p>
  <div class="clear"></div>
</section>
```

#### CSS

```css
.clear {
  clear: both;
}
```

<br>

### 2. Set the `overflow` property to **auto**

```css
section {
  overflow: auto;
}
```

<br>

### 3. Set the `display` property to **flow-root**

```css
section {
  display: flow-root;
}
```
