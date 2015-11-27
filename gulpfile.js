var gulp = require("gulp");
var livereload = require("gulp-livereload");
var webpack = require("webpack-stream");

gulp.task("webpack", function () {
    gulp.src("es6/main.js")
        .pipe(webpack( require("./webpack.config.js") ))
        .pipe(gulp.dest("dist/"));
});

gulp.task("watch", function () {
    livereload.listen();

    gulp.watch([
        "dist/bundle.js",
        "index.html",
    ], function (event) {
        livereload.changed(event);
    });

});

gulp.task("default", ["webpack", "watch"]);
