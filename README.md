# Tree Generation from Markup

### Demo

-- here

### About

Provided with an string with indentations, generate a folder-like structure

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

```
  # Development
  yarn dev // or npm run dev

  # Production ready bundle
  yarn build // or npm run build
```

### Aknowledgments

For the build process, I followed approach outlined in the [Vue-CLI webpack template](https://github.com/vuejs-templates/webpack)

### Emojis?

🦉
