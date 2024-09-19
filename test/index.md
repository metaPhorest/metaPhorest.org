---
layout: doc
outline: deep
---

<script setup>
import image1 from './example-edit.jpg?w=200';
</script>

  
# Text

# H1
## H2
### H3
#### H4
##### H5
###### H6


*italic*, **bold**, ***bolditalic***

> Blockquote Blockquote Blockquote Blockquote Blockquote Blockquote Blockquote Blockquote Blockquote Blockquote Blockquote Blockquote Blockquote Blockquote Blockquote Blockquote Blockquote Blockquote Blockquote Blockquote Blockquote Blockquote Blockquote Blockquote Blockquote Blockquote Blockquote Blockquote Blockquote Blockquote 


### List

- List Item
- List Item
- List Item
- List Item

### Numbered List

1. Numbered List Item
2. Numbered List Item
3. Numbered List Item
4. Numbered List Item

### Links

- [http://metaphorest.org](http://metaphorest.org)
- [metaPhorest](http://metaphorest.org)

### Code Block

```javascript
let a = 1
let b = 2
c = a + b
```

### Inline Code

In the above block `let a = 1` defines variable `a`

# Images
---

### Absolute Images from `/public/`

`![](/images/metaphorest-logo.png)`
![](/images/metaphorest-logo.png)

---

### Relative Images

`![](no-cripsr-tomato.jpg)`
![](no-cripsr-tomato.jpg)

### Figure Component

Image can be transformed (scaled) during compile-time, they will not show up in dev, only on compiled site:

`<Figure :src="image1.src" alt="Image Alt" caption="Image Caption" />`

`image1` needs to be imported with JS:
```javascript
<script setup>
import image1 from './example-edit.jpg?w=200';
</script>
```
`w=100` means: scale to 200px width
<Figure :src="image1.src" alt="Image Alt" caption="Image Caption" />

The Figure Component is most useful, where different sizes of the same image is needed.


# Event Component

<Event 
  title="999th metaPhorest Seminar"
  presenter="Name Name"
  href="/event-1"
/>
