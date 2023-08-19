const gulp = require("gulp"); // Поключение системы gulp
const {src, dest} = require("gulp"); // Методы gulp
const multiDest = require('gulp-multi-dest'); // Поддержка нескольких путей вывода
const rename = require("gulp-rename"); // Переименование файлов
const replace = require('gulp-replace'); // Замена в файле
const concat = require("gulp-concat"); // Конкатенация файлов
const del = require("del"); // Очистка файлов в директории результата
const notify = require("gulp-notify"); // Сообщения (подсказки)
const plumber = require("gulp-plumber"); // Обработка ошибок
const size = require("gulp-size"); // Размер файлов при кампиляции
const newer = require("gulp-newer"); // Проверка обновлений
const changed = require('gulp-changed'); // Отслеживание изменений в файлах
const gulpZip = require("gulp-zip"); // Создание архива
const browserSync = require("browser-sync").create(); // Синхронное обновление браузера, локальный сервер

const htmlmin = require('gulp-htmlmin'); // Минимизатор html

const cleanCSS = require('gulp-clean-css'); // Минимизатор css файлов
const cssbeautify = require("gulp-cssbeautify"); // Конвертация из минифицированного css в обычный
const groupCssMediaQueries = require("gulp-group-css-media-queries"); // Группировка медиазапросов
const removeComments = require("gulp-strip-css-comments"); // Удаление комментариев в css
const autoprefixer = require("gulp-autoprefixer");  // Добавление вендорных префиксов
const sass = require("gulp-sass")(require("sass")); // Подключение препроцессора Sass
const sourcemaps = require('gulp-sourcemaps'); // Отображение в браузере карты препроцессора

const terser = require('gulp-terser'); // Анализ, минимизация и сжатие JS файлов
const babel = require('gulp-babel'); // Перед JS кода в более старый стандарт

const imagemin = require("gulp-imagemin"); // Сжатие изображений
const webp = require('gulp-webp'); // Создание webp изображений
const avif = require('gulp-avif'); // Создание avif изображений
const svgSprite = require('gulp-svg-sprite'); // Создание SVG-спрайтов
const svgmin = require('gulp-svgmin'); // Сжатие SVG
const cheerio = require('gulp-cheerio'); // Изменение атрибутов иконок в спрайте

const ttf2woff = require('gulp-ttf2woff'); // Конвертация шрифтов из ttf в woff
const ttf2woff2 = require("gulp-ttf2woff2"); // Конвертация шрифтов из ttf в woff2


/* Paths */
const srcPath = 'src/';
const distPath = 'dist/';

const path = {
    build: {
        html:   distPath,
        js:     distPath + "assets/js/",
        css:    distPath + "assets/css/",
        images: distPath + "assets/images/",
        fonts:  distPath + "assets/fonts/"
    },
    src: {
        html:   srcPath + "*.html",
        js:     srcPath + "assets/js/*.js",
        css:    srcPath + "assets/scss/*.scss",
        images: srcPath + "assets/images/**/*.{jpg,jpeg,png,gif,ico,webp}",
        fonts:  srcPath + "assets/fonts/**/*.{woff,woff2,ttf}"
    },
    watch: {
        html:   srcPath + "**/*.html",
        js:     srcPath + "assets/js/**/*.js",
        css:    srcPath + "assets/scss/**/*.scss",
        images: srcPath + "assets/images/**/*.{jpg,jpeg,png,gif,ico,webp}",
        fonts:  srcPath + "assets/fonts/**/*.{woff,woff2,ttf}"
    },
    clean: "./" + distPath
}


/* Tasks */
function server() {
    browserSync.init({
        server: {
            baseDir: "./" + distPath
        },
        browser: 'chrome',
        notify: false
    });
}

function html() {
    return src(path.src.html, {base: srcPath})
        .pipe(plumber())
        .pipe(htmlmin({
            removeComments: true,
            collapseWhitespace: true,
        }))
        .pipe(size())
        .pipe(dest(path.build.html))
        .pipe(browserSync.reload({stream: true}));
}

function css() {
    return src(path.src.css, {base: srcPath + "assets/scss/"})
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler : function(err) {
                notify.onError({
                    title:    "SCSS Error",
                    message:  "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(groupCssMediaQueries())
        .pipe(autoprefixer({
            grid: true,
            overrideBrowserslist: ["last 3 versions"],
            cascade: true
        }))
        .pipe(cssbeautify())
        .pipe(removeComments())
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write())
        .pipe(size())
        .pipe(dest(path.build.css))
        .pipe(browserSync.reload({stream: true}));
}

function cssWatch() {
    return src(path.src.css, {base: srcPath + "assets/scss/"})
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler : function(err) {
                notify.onError({
                    title:    "SCSS Error",
                    message:  "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write())
        .pipe(size())
        .pipe(dest(path.build.css))
        .pipe(browserSync.reload({stream: true}));
}

function js() {
    return src(path.src.js, {base: srcPath + 'assets/js/'})
        .pipe(plumber({
            errorHandler : function(err) {
                notify.onError({
                    title:    "JS Error",
                    message:  "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(terser())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest(path.build.js))
        .pipe(browserSync.reload({stream: true}));
}

function jsWatch() {
    return src(path.src.js, {base: srcPath + 'assets/js/'})
        .pipe(plumber({
            errorHandler : function(err) {
                notify.onError({
                    title:    "JS Error",
                    message:  "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
				.pipe(rename({suffix: '.min'}))
        .pipe(dest(path.build.js))
        .pipe(browserSync.reload({stream: true}));
}

function images() {
    return src(path.src.images)
        .pipe(newer(path.build.images))
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(size())
        .pipe(dest(path.build.images))
        .pipe(browserSync.reload({stream: true}));
}

function webpImages() {
    return src(path.src.images)
        .pipe(newer(path.build.images))
        .pipe(webp())
        .pipe(size())
        .pipe(dest(path.build.images))
        .pipe(browserSync.reload({stream: true}));
}

function svgSpriteBuild() {
    return src("src/assets/images/svg/**/*.svg")
        .pipe(newer("src/assets/images/svg/**/*.svg"))
        .pipe(size())
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: "../sprite.svg"
                }
            }
        }))
        .pipe(multiDest(["dist/assets/images/svg/"]))
        .pipe(browserSync.reload({stream: true}));
}

function clean() {
    return del(path.clean);
}

function zip() {
    del('./*.zip')
    return gulp.src('dist/**/*')
        .pipe(gulpZip(`arhive.zip`))
        .pipe(gulp.dest('./'))
}

function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], cssWatch);
    gulp.watch([path.watch.js], jsWatch);
    gulp.watch([path.watch.images], images);
    gulp.watch([path.watch.images], webpImages);
    gulp.watch([path.watch.images], svgSpriteBuild);
}

const build = gulp.series(clean, gulp.parallel(html, css, js, images, webpImages, svgSpriteBuild)); // Сборка проекта
const deployZIP = gulp.series(build, zip); // Сборка проекта и создание архива
const develop = gulp.parallel(build, watchFiles, server); // Сборка и разработка (дефолтная задача)


/* Exports Tasks */
exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
exports.webpImages = webpImages;
exports.svgSpriteBuild = svgSpriteBuild;
exports.clean = clean;
exports.zip = deployZIP;
exports.build = build;
exports.develop = develop;
exports.default = develop;
