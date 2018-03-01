# Tree Generation from Markup

### Demo

[https://optimistic-euler-fa7555.netlify.com/](https://optimistic-euler-fa7555.netlify.com/)

### About

Provided with a string with various indentations, generate a folder-like structure

### Test Input

```js
const test =
  '\
    page 1\n\
      page 1.1\n\
      page 1.2\n\
        page 1.2.1\n\
    page 2\n\
    page 3\n\
      page 3.1\n\
      page 3.2\n\
    page 4\n\
      page 4.1\n\
        page 4.1.1\n\
          page 4.1.1.1\n\
    page 5\
    ';
```

### Dependencies

* React
* Webpack 4 (Not utilizing the new API though)
* Emotion (For styling)

### Commands

```bash
# Development
yarn dev # or npm run dev

# Production ready bundle
yarn build # or npm run build
```
