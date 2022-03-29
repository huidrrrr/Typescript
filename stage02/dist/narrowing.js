"use strict";
function printAll(strs) {
    if (strs && typeof strs === "object") {
        for (const s of strs)
            console.log(s);
    }
    else if (typeof strs == "string") {
        console.log(strs);
    }
    else {
        // ,,
    }
}
function multiplayAll(value, factor) {
    if (!value) {
        return value;
    }
    else {
        return value.map((x) => {
            return x * factor;
        });
    }
}
console.log(multiplayAll([3, 4], 2));
