"use strict";
class Ctor {
    constructor(s) {
        this.s = s;
    }
}
function fn(ctor, s) {
    return new ctor(s);
}
const str = 'hello world';
const f = fn(Ctor, str);
console.log(f);
let ct = new Ctor(str);
console.log(ct);
