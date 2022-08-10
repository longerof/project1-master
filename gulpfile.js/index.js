const {buildCSS, devCSS} = require("./bundleCSS"); //добавление функций build и dev для css
const {buildJS, devJS, buildJSVendor, devJSVendor} = require("./bundleJS"); //добавление функций build и dev для js
const {buildImg, devImg} = require("./bundleImg"); //добавление функций build и dev для изображений
const {series, parallel, watch} = require("gulp"); //добавление очередей, параллелей и мониторинга
const del = require("del"); //импорт модуля del в переменную

exports.build = series(deleteDirectory, parallel(buildCSS, buildJS, buildJSVendor, buildImg)); //экспорт функций build
exports.dev = series(deleteDirectory, parallel(devCSS, devJS, devJSVendor, devImg), function () { //экспорт функций dev
    watch("src/css/**/*.*", parallel(deleteDirectory, devCSS)); //мониторинг css
    watch("src/js/**/*.*", parallel(deleteDirectory, devJS)); //мониторинг js
    watch("src/img/**/*.*", parallel(deleteDirectory, devImg)); //мониторинг изображений
});


function deleteDirectory(cb) { //функция удаления старых директорий
    del.sync(['dist/css/*.css', 'dist/img/*.*', 'dist/js/*.js'], {force: true});
    cb();
}

