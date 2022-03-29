"use strict";
// function handshape(shape:Shape){
//     if(shape.kind==='circle'){
//     }
// }
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
    }
}
