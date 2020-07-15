"use strict";
exports.__esModule = true;
var ArrayManipulations = /** @class */ (function () {
    function ArrayManipulations() {
    }
    ArrayManipulations.prototype.arrayFindMultiples = function (myArray) {
        var a = [];
        var i = 0;
        var j = 0;
        for (i = 0; i < myArray.length; i++) {
            if (myArray[i] % 5 == 0 || myArray[i] % 10 == 0) {
                a[j] = myArray[i];
                j++;
            }
        }
        return a;
    };
    ArrayManipulations.prototype.arraySeparate = function (myArray) {
        var a = [];
        var j = 0;
        var i = 0;
        for (i = 0; i < myArray.length; i++) {
            if (typeof myArray[i] == "string") {
                a[j] = myArray[i];
                j++;
            }
        }
        return a;
    };
    ArrayManipulations.prototype.arraySplit = function (myArray) {
        var a;
        return a;
    };
    ArrayManipulations.prototype.arraySort = function (myArray) {
        myArray.sort();
        return myArray;
    };
    ArrayManipulations.prototype.arrayReplace = function (myArray) {
        var i = 0;
        for (i = 0; i < myArray.length; i++) {
            if (myArray[i] % 3 == 0) {
                myArray[i] = 5;
            }
        }
        return myArray;
    };
    return ArrayManipulations;
}());
var myArray = [2, 5, 10, "nandan", 44, 25, 46, 80, 96, "string"];
var array = new ArrayManipulations();
console.log(array.arrayFindMultiples(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySplit(myArray));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));
