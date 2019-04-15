## Bilyeli

Bilyeli is a minimal boilerplate for modern React app builds. Always up-to-date, always simple.

<p align="center">
  <img src="src/assets/img/logo.svg" alt="Bilyeli" />
</p>

## Features

- [x] React
- [x] React router
- [x] Redux thunk
- [x] Webpack 4 (development and production config)
- [x] Webpack dashboard
- [x] Hot module replacement
- [x] Babel
- [x] Css modules with scss
- [x] File loader (png,gif,jpg,svg)
- [x] Airbnb eslint
- [x] Prettier
- [x] Storybook
- [x] Jest with enzyme
- [x] Preview production

## Setup

### Install

```
$ npm install
```

or

```
$ yarn install
```

### Running in dev mode

```
$ npm start
```

#### Running it with [webpack dashboard](https://github.com/FormidableLabs/webpack-dashboard)

```
$ npm run dev
```

### Development with storybook

Files with the `**.stories.js` extension are run.

```
$ npm run storybook
```

### Build (production)

Build will be placed in the `build` folder.

```
$ npm run build
```

### Build storybook (production)

Build will be placed in the `.out-storybook` folder.

```
$ npm run build:storybook
```

### Production preview

Preview the `build` folder.

```
$ npm run preview
```

### Start test

Files with the `**.test.js` extension are run.

```
$ npm run test
```
