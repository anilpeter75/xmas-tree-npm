# 🎄 react-xmas-tree

### A beautiful 3D animated Christmas Tree for **React**, with support for **HTML** and **Vanilla JavaScript** via the core mount function.

![npm](https://img.shields.io/npm/v/react-xmas-tree.svg)
![downloads](https://img.shields.io/npm/dm/react-xmas-tree.svg)
![license](https://img.shields.io/npm/l/react-xmas-tree.svg)

Add a festive rotating Xmas tree with glowing lights and animated star to any webpage or React project.

## 🌐 Live Demo
https://react-xmas-tree.vercel.app/

---

## ✨ Features

- 🎄 Beautiful 3D rotating Xmas Tree
- ✨ 50+ animated lights
- ⭐ Animated glowing star
- ⚛ React component included
- 🌐 Plain HTML & Vanilla JS support
- 📦 Tiny, dependency-free
- 🔌 Works in any bundler (Vite, Next.js, CRA, Webpack)
- 🚀 High Performance (Optimized CSS)
- 📱 Mobile Friendly

---

## 🌐 Browser Support

| Browser | Supported |
|---------|-----------|
| Chrome  | ✅ Yes    |
| Firefox | ✅ Yes    |
| Safari  | ✅ Yes    |
| Edge    | ✅ Yes    |
| iOS/Android | ✅ Yes |

---

## 🚀 Performance

- **Optimized Animations**: Uses `will-change: transform` for buttery smooth 60fps animations.
- **Lightweight**: Zero dependencies and tiny bundle size.
- **Efficient**: React component wrapped in `React.memo` to prevent unnecessary re-renders.

---

## 📦 Installation

```bash
npm install react-xmas-tree
```

---

## ⚛ React Usage

```jsx
import XmasTree from "react-xmas-tree/react";

export default function App() {
  return <XmasTree />;
}
```

The tree appears at the bottom-left of the page.

---

## 🌐 HTML + JavaScript Usage

```html
<div id="xmas"></div>

<script type="module">
  import { mountXmasTree } from "react-xmas-tree/core";
  mountXmasTree("#xmas");
</script>
```

Works in:

✔ Plain HTML  
✔ WordPress  
✔ Shopify  
✔ Blogger  
✔ Any static website

---

## 🎁 Vue / Angular / Svelte Usage

```js
import { mountXmasTree } from "react-xmas-tree/core";

onMounted(() => {
  mountXmasTree("#tree");
});
```

```html
<div id="tree"></div>
```

---

## 📁 Package Structure

```
react-xmas-tree/
 ├── dist/
 │    ├── react/ (React component + CSS)
 │    ├── core/ (JS mount function)
 │    └── html/ (Demo)
 └── README.md
```

---

## 🔧 Customization

You can easily customize the tree's appearance and position using CSS or props.

### Position
Override the default bottom-left position:

#### Using CSS:
```css
.tree-container {
  left: 30px !important;
  bottom: 10px !important;
  right: auto !important;
  top: auto !important;
}
```

#### Using Props:
```jsx
import XmasTree from "react-xmas-tree/react";

export default function App() {
  return (
    <XmasTree 
      position={{ 
        left: "30px", 
        bottom: "10px",
        position: "fixed"
      }} 
    />
  );
}
```

### Colors

#### Star Color
```jsx
<XmasTree starColor="#ff0000" /> {/* Red star */}
```

#### Light Colors
```jsx
<XmasTree 
  lightColors={[
    "#ff0000", // Red
    "#00ff00", // Green
    "#0000ff", // Blue
    "#ffff00", // Yellow
    "#ff00ff"  // Magenta
  ]} 
/>
```

### CSS Classes
Add custom CSS classes for advanced styling:

```jsx
<XmasTree 
  containerClass="my-container-class"
  treeClass="my-tree-class"
  lightClass="my-light-class"
  starClass="my-star-class"
/>
```

### Custom Light Styles
Apply custom styles to all lights:

```jsx
<XmasTree 
  customLightStyles={{
    width: "2vmin",
    height: "2vmin",
    borderRadius: "20%"
  }}
/>
```

### Complete Example
```jsx
import XmasTree from "react-xmas-tree/react";

export default function App() {
  return (
    <XmasTree 
      position={{ 
        right: "20px", 
        bottom: "20px",
        position: "fixed"
      }}
      starColor="#ff0000"
      lightColors={[
        "#ff0000", "#00ff00", "#0000ff", 
        "#ffff00", "#ff00ff", "#00ffff"
      ]}
      containerClass="custom-container"
      customLightStyles={{
        width: "1.5vmin",
        height: "1.5vmin"
      }}
    />
  );
}
```

Then add custom CSS:
```css
.custom-container {
  z-index: 1000;
}

.custom-container .tree__light {
  box-shadow: 0 0 5px currentColor;
}
```

---

## 📸 Demo

You can preview in the included:

```
dist/html/index.html
```

---

## 📄 License

MIT © 2025

## 👨‍💻 Author

**Anil Peter**  
🔗 Portfolio: https://anilpeter.vercel.app/  
🔗 GitHub: https://github.com/anilpeter75

![Christmas Tree Animation](https://github.com/user-attachments/assets/7740475c-def1-4ac9-89cc-c8da234fac31)

