![npm](https://img.shields.io/npm/v/@mill3-packages/system-ui-sass?style=for-the-badge)


# Mill3-packages : system-ui-sass

Our utility CSS classes system for typography, layout, sizings, colors, effects. Built with SASS, largely inspired by Bootstrap (for mixins) and TailWindCSS for classes naming conventions and the idea around an utiliy-first style framework.

## Credits

* Original code structure idea by [@ebhoren](https://github.com/ebhoren).
* Responsive @mixins taken from [Bootstrap](https://github.com/twbs/bootstrap) functions.
* CSS resets from [Normalize.css](github.com/necolas/normalize.css)

## Package install

Install with NPM :

```npm install @mill3-packages/system-ui-sass```

Install with Yarn :

```yarn add @mill3-packages/system-ui-sass```

## Installation in your project

**Option 1** : import precompiled CSS version in your main css file.

Make sur you are using a builder like Webpack which should import directly from your ```node_modules``` directory.

```css
@import '@mill3-packages/system-ui-sass/dist/system-ui.css'
```

**Option 2 :** import SASS file and customize theme. Our theme is structured in JSON format than converted to SASS variables.

First, run this command for coping the theme file from ```node_modules``` to your project root :

```bash
./node_modules/.bin/system-ui-cli
```

This should copy a file named ```theme.js```.

Add SASS file to your main style file

```css
@import '@mill3-packages/system-ui-sass/src/system-ui.scss'
```

Now you need to add in your ```webpack.config.js``` a special loader for injecting theme.js data converted in SASS variables.

Exemple for Webpack :

```bash
npm install --save-dev sass-json-loader
```

Add ```sass-json-loader``` to your loaders :

```javascript
const theme = path.resolve(`theme.js`),

rules : [
    {
      test: /\.(sa|sc|c)ss$/i,
      use: [
        `css-loader`,
        `sass-loader`,
        {
          loader: 'sass-json-loader',
          options: { path: PATHS['theme'] }
        }
      ]
    }
  ]
},
```

Now start webpack, customize theme.js file, enjoy !

## Usage

Quick start documentation coming soon, refer to our Sassdoc below.

Demo page : [https://mill3-system-ui-sass-demo-site.netlify.com/](https://mill3-system-ui-sass-demo-site.netlify.com/)

## SassDoc :

All classes, mixins & functions are documented on our Sassdoc site.

[https://mill3-system-ui-sass-docs.netlify.com/](https://mill3-system-ui-sass-docs.netlify.com/)

## Todo

- [X] Package bin script for copying `theme.js` file outside `node_modules` (WIP)
- [X] Finish basic documentation in this file
- [x] Add instructions for Webpack loaders
- [X] Line-height module
- [ ] Write quick start usage documentation in this file
- [X] Add normalizing css
- [X] Modules and variables for basic HTML text body elements: H1-H6, p, ul, ol
- [ ] Add tests and Travis config
- [ ] Finish Sassdoc documentation
- [X] Add extra colors
- [ ] Add .prettierrc file


