"use strict";
function isCat(pet) {
    return pet.catch !== undefined;
}
function getSmallPet() {
    let cat = {
        name: "mimi",
        catch: () => { },
    };
    let dog = {
        name: "walky",
        woof: () => { },
    };
    return true ? cat : dog;
}
let pet = getSmallPet();
if (isCat(pet)) {
    pet.catch();
}
else {
    pet.woof();
}
const zoo = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater = zoo.filter(isCat);
const underWater1 = zoo.filter(isCat);
const underWater3 = zoo.filter((pet) => {
    if (pet.name === 'frog') {
        return false;
    }
    return isCat(pet);
});
let xiaomi = {
    name: 'xiaomi',
    catch: () => { },
};
let liuliu = {
    name: 'liuliu',
    woof: () => { },
};
console.log(isCat(xiaomi));
console.log(zoo);
