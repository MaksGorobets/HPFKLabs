let addArray=[1,3,1,7,9];
let addArray2=addArray.map(el=>el+20);
console.log(addArray2); // Array(5) [ 21, 23, 21, 27, 29 ]

let filterArray=[1,3,1,7,9];
let filterArray2=filterArray.filter(el=> el===7 || el===9);
console.log(filterArray2); // Array [ 7, 9 ]

let reduceArray=[1,3,1,7,9];
let reduceArray2=reduceArray.reduce((total,current)=>total*current);
console.log(reduceArray2); // 189

let findArray=[6,7,3,9,5,10,15];
let findArray2 = findArray.find(el=> el<15);
console.log(findArray2); // 6

let fiArray=[27,7,3,9,5,10,15];
let fiArray2 = fiArray.findIndex(el=> el==15);
console.log(fiArray2); // 6

let colors = ["Yellow", "Pink", "Blue", "Green"];
let result = colors.indexOf("Green");
console.log(result); // 3

let arr=[6,7,15,9,5,10,7];
let pushed=arr.push(14);
console.log(pushed); // 8
console.log(arr); // Array(8) [ 6, 7, 15, 9, 5, 10, 7, 14 ]

let arrToDel=[6,7,15,9,5,10,7];
let del=arrToDel.pop();
console.log(del); // 7
console.log(arrToDel); // Array(6) [ 6, 7, 15, 9, 5, 10 ]

let arrToShift=[6,7,15,9,5,10,7];
let shifted=arrToShift.shift(5,6,7);
console.log(shifted); // 6
console.log(arrToShift); // Array(6) [ 7, 15, 9, 5, 10, 7 ]

let arrToUnshift=[6,7,15,9,5,10,7];
let unshifted=arrToUnshift.unshift(5,6,7);
console.log(unshifted); // 10
console.log(arrToUnshift); // Array(10) [ 5, 6, 7, 6, 7, 15, 9, 5, 10, 7 ]

var nameArr = ['Daniil', 'Denis', 'Vitalik','Anton','Denis'];
nameArr.splice(4,1,'Maksim');
console.log(nameArr); // Array(5) [ "Daniil", "Denis", "Vitalik", "Anton", "Maksim" ]

nameArr = ['Daniil', 'Denis', 'Vitalik','Anton','Denis'];
let sliced=nameArr.slice(1,4);
console.log(sliced); // Array(3) [ "Denis", "Vitalik", "Anton" ]

let numArr = [25, 12, 1,28,5];
let sorted=(firstEl,secondEl)=>firstEl-secondEl;
numArr.sort(sorted);
console.log(arr); // Array(8) [ 6, 7, 15, 9, 5, 10, 7, 14 ]

///////////////////////////////////

document.write("Масив1"+"</br>");
let mas1=[];

for (let i=0; i<10; i++) {
    mas1[i]= Math.random();
    document.write(mas1[i]+'</br> ');
}

document.write("Масив2"+"</br>");
let mas2=[];
for (let i=0; i<10; i++) {
    mas2[i]= Math.random()*10;
    document.write(mas2[i]+'</br> ');
}

let mas3=[];
document.write("Масив3"+"</br>");
for (let i=0; i<10; i++) {
    mas3[i]=Math.round(Math.random()*10);
    document.write(mas3[i]+'</br> ');
}