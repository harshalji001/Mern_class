const arr1 = [44,31,45,66,89,455,11,22.662,47,52,65,87,88,44,37,67];
const arr2 = arr1.filter(value=>value%2==0)
.map(value=>value>25?value*10:value);


console.log(arr2);