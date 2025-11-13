const arr1 = [44,31,45,65,87,88,44,37,67];
// const arr2 = [];

// for (let x of arr)
// {
//     arr2.push(x*10);
// }

// for (let x of arr)
// {
//     if(x%2==0)
//     arr2.push(x*10);
//     else
//     arr2.push(x);
// }

// const arr2 = arr1.map(value=>value*10);
const arr2 = arr1.map(value=>value%2==0?value*10:value);
console.log(arr2);