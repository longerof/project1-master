// function getCatId() {
//     this.fullName = fullName;
//
//     Object.defineProperties(this, {
//         animalType: {
//             get: function () {
//                 return this.fullName.split('.')[0];
//             },
//
//             set: function (newAnimalType) {
//                 this.fullName = newAnimalType + '.' + this.animalId;
//             }
//
//         },
//
//         animalId: {
//             get: function () {
//                 return this.fullName.split('.')[1];
//             },
//
//             set: function (newAnimalId) {
//                 this.fullName = this.animalType + '.' + newAnimalId;
//             }
//         }
//     });
// }

var cat = {
    id: 58,
    color: "grey",
    weight: 2,
    breed: "British",
    age: 5,
    parents: {
        father: {
            id: 7
        },
        mother: {
            id: 1954
        }
    },
}

Object.defineProperty(cat, "father", {
        get: function () {
            return this.parents.father.id;
        },

        set: function (value) {
            this.parents.father.id = value;
        }
    }
);

console.log(cat.father)

// https://learn.javascript.ru/descriptors-getters-setters
// console.log(father) => 7
// console.log(cat.mother) => 1954




var cats2 = new function (){
    /**
     *
     * @type {{}}
     */
    var cats = {};

    /**
     *
     * @type {{color: undefined, weight: undefined, id: undefined, breed: undefined, age: undefined, parents: {mother: {id: undefined}, father: {id: undefined}}}}
     */
    var defaultCat = {
        id: undefined,
        color: undefined,
        weight: undefined,
        breed: undefined,
        age: undefined,
        parents: {
            father: {
                id: undefined
            },
            mother: {
                id: undefined
            }
        }
    };

    /**
     *
     */
    this.set = function () {
        console.log('set')
    }

    /**
     *
     * @private
     */
    function _test() {}

    return this;
}

cats2.set();

var cats = new Map();

cats.set = function (key, value) {
    this[key] = value
};

cats.get = function (value) {
    return this.key
};

/**
 *
 * @param value
 */
cats.remove = function (value) {
    this[value] = null
    delete this[value];
};

cats.set(cat, 58);

cats.remove(58);

cats.get(58);


console.log(cats);

// cats.set(cat);
// cats.remove(58);
// cats.get(58) => cat

/**
 * @param obj указывает объект, в котором будет искаться ключ
 * @param path указывает путь к ключу
 * @param defaultValue возвращается в случае undefined
 * @returns {*} возвращает то, что требовалось (зависит от условия)
 */
// var get = function (obj, path, defaultValue) {
//     path = path.split(".");
//
//     for (var i = 0; i < path.length; i++) {
//         var key = path[i];
//         var value = obj[key];
//         obj = value;
//         if (typeof value !== 'object' && i !== (path.length - 1)) {
//             return defaultValue;
//         }
//     }
//
//     return obj || defaultValue;
// }
//
// console.log(get(cat, 'cat.father', "NONE"));




