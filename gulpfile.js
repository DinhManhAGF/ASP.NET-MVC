var gulp = require('gulp'),
    cssmin = require("gulp-cssmin")
    rename = require("gulp-rename");
const sass = require('gulp-sass')(require('sass'));

//Nếu dùng default thay vì sass thì khi biên dịch chỉ cần dùng gulp thay vì gulp sass
gulp.task('default', function () {
    return gulp.src('assets/scss/site.scss') //biên dịch file scss thành css
        .pipe(sass().on('error', sass.logError))
        //.pipe(cssmin()) //Dùng để tối ưu hóa code bỏ đi các khoảng trắng dư thừa
        .pipe(rename({
             //suffix: ".min"
             //Nếu dùng suffix này thì khi biên dịch trong wwwroot/css/ sẽ có file site.min.css 
             //còn nếu không dùng thì sẽ thành site.css nên sẽ ghi đè lên file site.css
             //-> dùng lệnh gulp sass để biên dịch
        }))
        .pipe(gulp.dest('wwwroot/css/'));
    });

gulp.task("watch", function () {
    //*.scss là tất cả các fike .scss
    //Nếu file này có sự thay đổi về nội dung thì có tác vụ series mỗi khi thay đổi code thì
    //tác vụ default sẽ tự động được thực thi
    gulp.watch('assets/scss/*.scss', gulp.series('default'));
});