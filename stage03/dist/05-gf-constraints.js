"use strict";
function longest(a, b) {
    return a.length >= b.length ? a.length : b.length;
}
const longerArray = longest([1, 2], [3, 4, 5]);
const longerString = longest('abc', 'aa');
console.log(longerArray);
