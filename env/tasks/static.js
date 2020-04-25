const browserSync = require("browser-sync");
const { src, dest } = require("gulp");
const cache = require("gulp-cached");

module.exports = static = () => {
    return src("static/**/*").pipe(dest("web/"));
};
