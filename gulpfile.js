const {src, dest, watch, parallel, series} = require('gulp');       // функции Gulp из коробки

const scss  = require('gulp-sass')(require('sass'));        // подключение gulp-sass
const concat = require('gulp-concat');                      // подключение gulp-concat
const browserSync = require('browser-sync').create();       // подключение browser-sync
const uglify = require('gulp-uglify-es').default;           // подключение gulp-uglify-es
const autoprefixer = require('gulp-autoprefixer');          // подключение gulp-autoprefixer
const imagemin = require('gulp-imagemin');                  // подключение gulp-imagemin
const del = require('del');                                 // подключение del


function browsersync() {                            // создание сервера
    browserSync.init({
        server: {
            baseDir: 'app/'
        }
    });
}

function cleanDist() {
    return del('dist');                             // удаление папки dist
}

function minifyImages() {
    return src('app/imgs/**/*')                                     // выбор всех изображений из всех папок в imgs
        .pipe(imagemin([                                            // настройки сжатия
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
        .pipe(dest('dist/images'))                                  // выгрузка минифицированных файлов в dist
}

function compileScripts() {
    return src([                                    // выбор файлов, с которыми будет осуществляться работа
        'node_modules/jquery/dist/jquery.js',
        'node_modules/lightslider/dist/js/lightslider.min.js',
        'app/js/main.js'
    ])  
        .pipe(concat('main.min.js'))                // конкатенация выбранных файлов в 1 файл main.min.js
        .pipe(uglify())                             // сжатие получившегося файла
        .pipe(dest('app/js'))                       // выгрузка сжатого файла в папку app/js
        .pipe(browserSync.stream())                 // внедрение изменений без перезагрузки страницы
}

function compileStyles() {
    return src([                                    // выбор файлов, с которыми будет осуществляться работа
        'app/scss/**/*.scss',
        'node_modules/lightslider/dist/css/lightslider.min.css'
    ])               
        .pipe(scss({outputStyle: 'compressed'}))    // преобразование scss файла в css файл
        .pipe(concat('style.min.css'))              // конкатенация выбранных файлов (сейчас 1 файл) в файл style.min.css
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'], // добавление префиксов для последних 10 версий браузеров
            grid: true                                 // добавление префиксов для гридов
        }))
        .pipe(dest('app/css'))                      // выгрузка сжатого файла в папку app/css
        .pipe(browserSync.stream())                 // внедрение изменений без перезагрузки страницы
}

function build() {
    return src([                                    // выбор файлов, с которыми будет осуществляться работа
        'app/css/style.min.css',
        'app/fonts/**/*',
        'app/js/main.min.js',
        'app/*.html'
    ], {base: 'app'})                               // сохранить структуру проекта из app
        .pipe(dest('docs'))
}

function watching() {
    watch(['app/scss/**/*.scss'], compileStyles);                       // слежение за всеми файлами в папке scss с расширением .scss и запуск styles при их изменении
    watch(['app/js/**/*.js', '!app/js/main.min.js'], compileScripts);   // слежение за всеми файлами в папке js с расширением .js. Восклицательный знак означает "кроме" 
    watch(['app/*.html']).on('change', browserSync.reload);             // слежение за всеми файлами с расширением .html в папке app и перезагрузка страницы. Используется в HTML и JS файлах
}

exports.compileStyles = compileStyles;              // для запуска через gulp compileStyles
exports.watching = watching;                        // для запуска через gulp watching
exports.browsersync = browsersync;                  // для запуска через gulp browsersync
exports.compileScripts = compileScripts;            // для запуска через gulp compileScripts
exports.minifyImages = minifyImages;                // для запуска через gulp minifyImages

exports.build = series(cleanDist, minifyImages, build);     // для запуска через gulp build
exports.default = parallel(compileStyles, compileScripts, browsersync, watching);          // для параллельного запуска тасков через команду gulp