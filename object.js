// let user={
//      name:"radha",
//      surname:"nagar",
//      age:21
// }

// for(keys in user){
//     console.log(user[keys]);
// }

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

//   console.log(fruits.pop("apples"));

//    class student{
//        constructor(name){
//         this.myName=name
//         console.log('construction calling');
//        }

//        hello(){
//         console.log("Hello  "+ this.myName);
//        }
//    }

//    let a=new student('radha')
//    a.hello()

// const numbers = [1, 2, 3, 2, 2, 4, 5, 5, 6];
// const duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
// console.log(duplicates);

// let result = arr.filter((item,index)=> index !== arr.indexOf(item))
// console.log(result);

// let rs = [...new Set(arr)]
// let sr = rs.sort((a, b) => a - b)
// console.log(rs);

// let arr='1 2 4 5 6';
// let rs=arr.split(' ')
// console.log(rs[3]);

// let arr="How are you doing today?"
// let rs=arr.split(" ")
// console.log(rs[3]);

let arr = [1, 23, 32, 23, 5, 54, 4, 954];
let rs = [...new Set(arr)].sort((a, b) => a - b)
// let lastElement = arr[arr.length - 1];

// console.log(lastElement);
let sr = rs[rs.length-2]
console.log(sr);