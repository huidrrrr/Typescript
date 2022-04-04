"use strict";
function minimunlength(obj, minimun) {
    return obj.length >= minimun ? obj : { length: minimun };
}
const arr = minimunlength([1, 2, 3], 6);
