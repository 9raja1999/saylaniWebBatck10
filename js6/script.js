console.log("connected");
// var numbers = [];
// numbers[0] = 1;
// numbers[2] = 3;
// numbers[3] = 4;
// console.log("ARRAY FIRST INDEX", num);
// SHIFT & UNSHIFT
// var items = ["a", "b", "c"];
// items.shift(); //[b,c]
// items.unshift("A", "B"); //[A,B,b,c]
// console.log("ARRAY", items);

// var multidimensional = [
//     [1,2,3,4,5],
//     [1,2,3,4,4],
//     [1,2,3,4,5],
//     [1,2,3,4,5],
//     [1,2,3,4,5],
// ]
// console.table(multidimensional)
// console.table(multidimensional[1][3]) //array[row][column]

// var animals = ["dog", "cat", "fly", "bug", "ox"];
// animals.splice(0, 1, "pig", "duck", "emu");
// animals.splice(2, 0, "pig", "duck", "emu");
// console.log("ANIMALS", animals);
//splice(index num, count of delete it4ems, ....elements to be inserted)


var animals = ["dog", "cat", "fly", "bug", "ox"];
var items = animals.slice(2, 9);
// animals.splice(2, 0, "pig", "duck", "emu");
console.log("ANIMALS", items);
//splice(index num, count of delete it4ems, ....elements to be inserted)