const {src, dest} = require("gulp"); //распаквка gulp в src и dest
const rename = require("gulp-rename"); //подключаем rename
const path = require("path"); //создаем переменную для указания пути
const uglifyjs = require("gulp-uglifyjs"); //подключаем gulp-uglifyjs для оптимизации
const concat = require("gulp-concat"); //подключаем concat для сборки всех файлов в один
const vendor = [path.resolve(__dirname, "../vendor/test/test.js")]; //создание массива путей обрабатываемых файлов
const files = [path.resolve(__dirname, "../src/js/site.js")]; //создание массива путей обрабатываемых файлов
exports.buildJS = buildJS; //экспортируем функцию как buildJS
exports.devJS = devJS; //экспортируем функцию как devJS
exports.buildJSVendor = buildJSVendor; //экспортируем функцию как buildJSVendor
exports.devJSVendor = devJSVendor; //экспортируем функцию как devJSVendor

function buildJSVendor() { //создаем функцию для оптимизации
    return src(vendor)
        .pipe(uglifyjs())
        .pipe(concat("vendors.js"))
        .pipe(rename({suffix: '.min'}))
        .pipe(dest(path.resolve(__dirname, "../dist/js")))
}

function devJSVendor() { //создаем функцию для преобразования в читабельный код
    return src(vendor)
        .pipe(concat("vendors.js"))
        .pipe(rename({suffix: '.min'}))
        .pipe(dest(path.resolve(__dirname, "../dist/js")))
}

function buildJS() { //создаем функцию для оптимизации JS кода
    return src(files)
        .pipe(uglifyjs())
        .pipe(concat("all.js"))
        .pipe(rename({suffix: '.min'}))
        .pipe(dest(path.resolve(__dirname, "../dist/js")))
}

function devJS() { //создаем функцию для преобразования в читабельный код
    return src(files)
        .pipe(concat("all.js"))
        .pipe(rename({suffix: '.min'}))
        .pipe(dest(path.resolve(__dirname, "../dist/js")))
}