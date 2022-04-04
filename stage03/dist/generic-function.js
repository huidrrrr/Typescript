"use strict";
function firstElement(arr) {
    return arr[0];
}
let y = firstElement(["a", "b", "c"]);
function map(arr, func) {
    return arr.map(func);
}
let lst = ['1', '2', '3'];
let rs = map(lst, (n) => parseInt(n));
let rs_lst = lst.map(x => parseInt(x));
console.log(rs);
console.log(rs_lst);
