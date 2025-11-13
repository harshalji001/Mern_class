const arr1 = [44,31,45,65,87,88,44,37,67];

const arr2 = arr1.filter((value,index)=>index%2==0 && value%2==0);


console.log(arr2);