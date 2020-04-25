const requireDir = require("require-dir");
const { task, series, parallel } = require("gulp");

const { styles, scripts, static, nunjucks, serve } = requireDir("./env/tasks/");

task("default", series(static, parallel(nunjucks, styles, scripts), serve));
task("build", series(static, parallel(nunjucks, styles, scripts)));
