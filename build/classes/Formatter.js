"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formatter = void 0;
var Formatter = /** @class */ (function () {
    function Formatter() {
    }
    Formatter.prototype.capitalizeFirstLetter = function (str) {
        if (typeof str !== "string") {
            throw new Error('TextFul > Expected a string for the function "capitalizeFirstLetter". Received ' +
                typeof str +
                " instead.");
        }
        return str[0].toUpperCase() + str.slice(1);
    };
    Formatter.prototype.jumbleWord = function (str) {
        var _this = this;
        if (typeof str !== "string") {
            throw new Error('TextFul > Expected a string for the function "jumbleWord". Received ' +
                typeof str +
                " instead.");
        }
        return str
            .split(" ")
            .map(function (letter) {
            return _this.shuffle(letter);
        })
            .join(" ");
    };
    Formatter.prototype.reverse = function (str) {
        if (typeof str !== "string") {
            throw new Error('TextFul > Expected a string for the function "reverse". Received ' +
                typeof str +
                " instead.");
        }
        return str.split("").reverse().join("");
    };
    Formatter.prototype.toCamelCase = function (str) {
        var _this = this;
        if (typeof str !== "string") {
            throw new Error('TextFul > Expected a string for the function "toCamelCase". Received ' +
                typeof str +
                " instead.");
        }
        var strToCamelCase = str.split(" ").slice(1);
        var finalStr = str.split(" ")[0];
        strToCamelCase.forEach(function (word) {
            finalStr += _this.capitalizeFirstLetter(word);
        });
        return finalStr;
    };
    Formatter.prototype.toKebabCase = function (str) {
        return str.split(" ").join("-");
    };
    Formatter.prototype.toPascalCase = function (str) {
        var _this = this;
        if (typeof str !== "string") {
            throw new Error('TextFul > Expected a string for the function "toPascalCase". Received ' +
                typeof str +
                " instead.");
        }
        var strArr = str.split(" ");
        var finalStr = "";
        strArr.forEach(function (word) {
            finalStr += _this.capitalizeFirstLetter(word);
        });
        return finalStr;
    };
    Formatter.prototype.toSnakeCase = function (str) {
        return str.split(" ").join("_");
    };
    Formatter.prototype.shuffle = function (str) {
        var a = str.split(""), n = a.length;
        for (var i = n - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a.join("");
    };
    return Formatter;
}());
exports.Formatter = Formatter;
