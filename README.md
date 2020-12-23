# gatsby-plugin-babel-remove-prop-types

## Description

Gatsby plugin for removing unnecessary React propTypes from the production build by implementing [babel-plugin-transform-react-remove-prop-types](https://www.npmjs.com/package/babel-plugin-transform-react-remove-prop-types).

## How to install

Install the plugin and its dependencies:

```bash
npm i gatsby-plugin-babel-remove-prop-types babel-plugin-transform-react-remove-prop-types
```

or

```bash
yarn add gatsby-plugin-babel-remove-prop-types babel-plugin-transform-react-remove-prop-types
```

Add the plugin to `gatsby-config.js`:

```js
module.exports = {
  plugins: [
    // other plugins
    'gatsby-plugin-babel-remove-prop-types',
  ],
}
```

## Example

**In**
```jsx
const Baz = (props) => (
  <div {...props} />
);

Baz.propTypes = {
  className: PropTypes.string
};
```

**Out**
```jsx
const Baz = (props) => (
  <div {...props} />
);
```