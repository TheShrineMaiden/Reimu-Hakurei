//mess with consts and terminal run
const array = [1,2,3,4,5,6];
array.push(9);
const miko = {
    name: "Reimu Hakurei",
    age: "15",
    place_of_living: "Hakurei Shrine"
}
miko.place_of_living = "Hakurei Shrine";

console.log(array);
console.log(miko);

//function
function sth() {
    console.log(miko.name);
    const tmp = 1;
    console.log(tmp);
}

//arrow funcs
let simplifiedFunc = (name,age) => {
    console.log(`Name: ${name}, Age: ${age}`);
}

simplifiedFunc("Reimu Hakurei",15);

const countFunc = (valA,valB) => valA+valB;

const sum = countFunc(700,27);

console.log(sum);

//Speard Operator usage

//arrays
const arr1 = [1,2,3];
const arr2 = [...arr1, 4];
console.log(arr1);
console.log(arr2);

//obj
const obj1 = {
    name: "sth",
    age: "nah wont tell",
}

const obj2 = {...obj1, placeOfLiving: "bruh nah"};

console.log(obj1);
console.log(obj2);

//forEach loop   
let arrForEach = [1,2,3,4,9];
arrForEach.forEach((val) => {
    console.log(val);
})