const arr1 = [
  { roll: 101, name: 'aditi', age: 21, branch: 'cs' },
  { roll: 102, name: 'yash', age: 21, branch: 'me' },
  { roll: 103, name: 'pooja', age: 21, branch: 'cs' },
  { roll: 104, name: 'vikas', age: 21, branch: 'me' },
  { roll: 105, name: 'jai', age: 21, branch: 'cs' },
  { roll: 106, name: 'mayank', age: 21, branch: 'cs' }
];

const selection = arr1.filter;

const arr2 = selection(ob=>ob.branch=='cs');

console.log(arr2);
