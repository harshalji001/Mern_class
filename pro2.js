function check(value,index,arr)
{
//console.log(value,index);
return value%2==0;
}

const arr1 = [44,31,45,65,87,88,44,37,67];
const arr2 = arr1.filter(check);
//filter hof 
//check is call back function


console.log(arr2);