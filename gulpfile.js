const gulp = require("gulp");
const requireDir = require("require-dir");
const tasks = requireDir("./tasks");
const webp = require('gulp-webp');

for (const func in tasks) {
  exports[func] = tasks[func];
}

gulp.task('webp', () => (
  gulp.src('src/image.jpg')
      .pipe(webp())
      .pipe(gulp.dest('dist')) // Змінити 'dist' на шлях до вашої папки з білдом
));

exports.build = gulp.parallel(tasks.ttf, tasks.ttf2, tasks.fonts, tasks.style, tasks.dev_js, tasks.rastr, tasks.html);

exports.dev = gulp.series(gulp.series(exports.build), gulp.parallel(tasks.server, tasks.watch));
