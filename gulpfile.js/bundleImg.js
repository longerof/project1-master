const {src, dest} = require("gulp"); //распаквка gulp в src и dest
const path = require("path"); //создаем переменную для указания пути
const imagemin = require("gulp-imagemin"); //подключаем gulp-imagemin
const imageCompress = require("imagemin-jpeg-recompress"); //подключаем imagemin-jpeg-recompress
const globImg = path.resolve(__dirname, '../src/img/**/*.{jpg,jpeg,png,gif,svg}');

exports.buildImg = buildImg; //экспортируем функцию как buildImg
exports.devImg = devImg; //экспортируем функцию как devImg

function buildImg() { //создаем функцию для преобразования изображений
    return src(globImg)
        .pipe(imagemin([
            imageCompress({
                loops: 4,
                min: 70,
                max: 80,
                quality: 'high'
            }),
            imagemin.gifsicle(),
            imagemin.optipng(),
            imagemin.svgo()
        ]))
        .pipe(dest(path.resolve(__dirname, '../dist/img')));
}

function devImg() { //создаем функцию для показа изображений
    return src(globImg)
        .pipe(dest(path.resolve(__dirname, '../dist/img')));
}