live: https://national-park-project.netlify.com/

# Gulp Nunjucks Starter

## 🚀 Quick start

1. **Install dependencies.**

    ```sh
    yarn install
    ```

1. **Start it up.**

    ```sh
    yarn start
    ```

1. **Open the source code and start editing!**

    Your site is now running at `http://localhost:3000`!

    Note: The BrowserSync's UI is disabled by default. If you would like to use it just go to `env/config/browserSync.config.js` and set ui key to `true`.

## SCSS

Source files are located in `src/scss/` and are compiled to `web/assets/css/style.css`.

Vendor/third-party files should be placed in `web/assets/css/vendor/` (e.g normalize.css).

## JS

Source files are located in `src/js/` and are compiled to `web/assets/js/bundle.js`.

Vendor/third-party files should be placed in `web/assets/js/vendor/` (e.g slick).

## Nunjucks

Source files are located in `src/nunjucks/`. Files from `src/nunjucks/page/*.nj` are compiled to `web` as `*.html` files.

All paths for `include`, `import` etc. are absolute. The base folder is set to `src/nunjucks`.

## Images & SVGs

These files should be placed in following directories.

Images `web/assets/images/`.

Icons (svg files) `web/assets/icons/`.

## Other files - fonts, favicons etc.

Just place them in `web` directory wherever you like. These files are not compiled by gulp/webpack. For example `fonts` files could be in `web/assets/fonts/` or `web/assets/css/fonts`.

## Built-in custom functions.

### imageSrc

Returns the image folder path `web/assets/images/`.

    <img src="{{ imageSrc('forest.jpeg') }}" alt="Example forests image">
    <img src="{{ imageSrc('folder/otherImage.png') }}" alt="Another example">

#### svg

Allows to add inline svg from `web/assets/icons/*svg` to template simply by svg `name`. Remember to add `| safe` filter to display svg.

    {{ svg('lock') | safe }}
#   N a t i o n a l - P a r k  
 