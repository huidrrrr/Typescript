"use strict";
var Dir;
(function (Dir) {
    Dir[Dir["up"] = 1] = "up";
    Dir[Dir["down"] = 2] = "down";
    Dir[Dir["right"] = 3] = "right";
    Dir[Dir["left"] = 4] = "left";
})(Dir || (Dir = {}));
console.log(Dir.up);
console.log(Dir.down);
