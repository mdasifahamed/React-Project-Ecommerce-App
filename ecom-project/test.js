const array = [1, 2, 3, 4];

// Remove the item at index 2
const indexToDelete = 3;
array.splice(indexToDelete, 2);

console.log(array); // The item at index 2 (which is 3) has been removed


const objs = [{"q":2,"p":10},{"q":20,"p":20}]
let sum = 0
let sum2 = 0
objs.forEach(element => {
    sum += element.q * element.p
});

console.log(sum);
objs.map((el)=>{
    sum2+= el.q * el.p;
})
console.log("Sum from map",sum);


const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 },
  ];
let keyword = "Ar"
keyword = keyword.toLowerCase();
const filteredPeople = people.filter(person => person.name.toLowerCase().includes(keyword) );

console.log(filteredPeople);
