type Cat = {
  name: string;
  catch: () => void;
};
type Dog = {
  name: string;
  woof: () => void;
};

function isCat(pet: Cat | Dog): pet is Cat {
  return (pet as Cat).catch !== undefined;
}

function getSmallPet(): Cat | Dog {
  let cat: Cat = {
    name: "mimi",
    catch: () => {},
  };
  let dog: Dog = {
    name: "walky",
    woof: () => {},
  };
  return true ? cat : dog;
}

let pet = getSmallPet();

if (isCat(pet)) {
  pet.catch();
} else {
  pet.woof();
}

const zoo: (Cat | Dog)[] = [getSmallPet(), getSmallPet(), getSmallPet()];

const underWater: Cat[] = zoo.filter(isCat);
const underWater1: Cat[] = zoo.filter(isCat) as Cat[];
const underWater3: Cat[]= zoo.filter((pet):pet is Cat => { 
    if(pet.name==='frog'){
        return false
    }
    return isCat(pet)
 })

let xiaomi:Cat={
    name:'xiaomi',
    catch: () => {},
}

let liuliu:Dog={
    name:'liuliu',
    woof: () => {},
}

console.log(isCat(xiaomi));
console.log(zoo);





