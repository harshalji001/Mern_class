const arr1 = [44,31,45,65,87,88,44,37,67];
const arr2 = [];

for(let x of arr1){
    if(x%2==0)
    {
        arr2.push(x);
    }
}
console.log(arr2);