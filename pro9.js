const arr1 = [66,76,45,31,87];

var status = arr1.every(value=>value>33);
console.log(status);

status = arr1.some(value=>value>33);
console.log(status);
