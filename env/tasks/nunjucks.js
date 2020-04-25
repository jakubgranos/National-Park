const browserSync = require("browser-sync");
const nunjucksRender = require("gulp-nunjucks-render");
const { src, dest } = require("gulp");
const nunjucksConfig = require("../config/nunjucks.config");
const cache = require("gulp-cached");

module.exports = nunjucks = () => {
    return src("src/nunjucks/page/*.+(nj|njk|nunjucks)")
        .pipe(nunjucksRender(nunjucksConfig))
        .pipe(cache("nj"))
        .pipe(dest("web"));
};
