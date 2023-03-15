// Find the last element of the following arrays.
// arr1 = [3,7,34,90,12]
// arr2 = [true, "green", "where",12,56]

const arr1 = [3,7,34,90,12];
console.log(arr1[4]);

const arr2 = [true, "green", "where",12,56];
console.log(arr2[4]);


myPets = ["Cow", "Bird", "Snake", "Dog"];
console.log(myPets.join(" "));

var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
console.log(arr3.sort());

var arr = ["apple", "mango", "apple","orange", "mango", "mango"];
function P(arr){
    return arr.filter((item,index) => arr.indexOf(item)===index)
}
function x(arr){
    return arr.filter((item,index) => arr.indexOf(item)!=index);
}
console.log(P(arr))
console.log(x(arr))




let word = "sevink"
console.log(word.sort())


