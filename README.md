# Tree Generation from Markup

### Demo

[https://optimistic-euler-fa7555.netlify.com/](https://optimistic-euler-fa7555.netlify.com/)

### About

Provided with a string with various indentations, generate a folder-like structure

### Test Input

```
page 1
  page 1.1
  page 1.2
    page 1.2.1
page 2
page 3
  page 3.1
  page 3.2
page 4
  page 4.1
    page 4.1.1
      page 4.1.1.1
page 5
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

### Other

The textarea _can_ use Tabs for indentation. Notice that it has a minor issue with the caret placement, if not at the end of the string.
