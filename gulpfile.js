var gulp = require('gulp');

gulp.task('default', function() {
    gulp.src('./node_modules/moment/moment.js')
   		.pipe(gulp.dest('./public/js/vendor')) 
   	;
});