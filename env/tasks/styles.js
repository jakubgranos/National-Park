const { src, dest } = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync");

module.exports = styles = () => {
    return src("src/scss/style.scss")
        .pipe(
            sass({
                outputStyle: "compact",
                includePaths: ["node_modules"],
            })
        )
        .pipe(autoprefixer())

        .pipe(dest("web/assets/css/"));
};
