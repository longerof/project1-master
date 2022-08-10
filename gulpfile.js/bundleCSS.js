const sass = require("gulp-sass")(require("sass")); //подключаем sass
const {src, dest} = require("gulp"); //распаквка gulp в src и dest
const postcss = require("gulp-postcss"); //подключаем postcss
const rename = require("gulp-rename"); //подключаем rename
const path = require("path"); //создаем переменную для указания пути
const autoprefixer = require("autoprefixer"); //подключаем autoprefixer
const cssnano = require("cssnano"); //подключаем cssnano

let css_plugins = [ //создаем переменную для плагинов
    autoprefixer([
            'last 15 version',
            'ie 10'],
        {cascade: true}),
    cssnano({reduceIdents: false})
];

exports.buildCSS = buildCSS; //экспортируем функцию как buildCSS
exports.devCSS = devCSS; //экспортируем функцию как devCSS

function buildCSS() { //создаем функцию для оптимизации css кода
    return src(path.resolve(__dirname, "../src/css/style.scss"))
        .pipe(sass())
        .pipe(postcss(css_plugins))
        .pipe(rename({suffix: '.min'}))
        .pipe(dest(path.resolve(__dirname, "../dist/css")))
}

function devCSS(){ // создаем функцию для преобразования в читабельный код
    return src(path.resolve(__dirname, "../src/css/style.scss"))
        .pipe(sass())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest(path.resolve(__dirname, "../dist/css")))
}