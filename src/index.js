// You should implement your task here.
"use strict";
module.exports = function towelSort(matrix) {
    let arr = "";
    console.log(arr.length);
    if (matrix === undefined || matrix.length === 0) {
        return [];
    }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2) {
            matrix[i] = matrix[i].reverse();
        }
    }
    return matrix.join(",").split(",");
};
