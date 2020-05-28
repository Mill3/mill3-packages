# MILL3 Wordpress Theme Boilerplate

Our WP theme boilerplate using Timber/Twig templates

## Requirements

- npm / yarn
- [Timber WP plugin](https://github.com/timber/timber/)

## How to use for local development

Edit `wp-config.php` and add this constant :

```php
define('THEME_DEV', true);
```

Make sure the _name_ line in `package.json` matches your theme's directory name.

```json
{
  "name": "mill3-wp-boilerplate",
  "version": "2.0.0"
  ...
```

```
/wp-content/themes/mill3-wp-boilerplate/
```

Install all node requirements :

```bash
npm install
```

Run the install script to find and replace the theme domain name and namespace

```bash
node install.js  --domain="mytheme" --namespace="MyTheme"
```

Then start Webpack

```bash
npm run dev
```

## Production assets build

Simply run :

```bash
npm run build
```

Then Git add everything in `dist/*` directory.

In production mode, assets are loaded from dist/assets.json file, cache busting included !

## Prettier/ESLint

You can ESLint your code with the following command :

```bash
npm run lint
```

And Prettier formatting :

```bash
npm run prettier
```

Please also note that there's a pre-commit hook using [pretty-quick](https://github.com/azz/pretty-quick) which can be disabled in `package.json`.
