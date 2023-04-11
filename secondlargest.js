// let arr=[23,4454,5,32,32,118923]
// function secondLargest(arr) {
//     var max1st = arr[0];
//     var max2nd = 0;
    
//     for(var i=0; i<arr.length; i++) {
//       if(arr[i] > max1st) {
//         max2nd = max1st;
//         max1st = arr[i];
//       }
//       else if(arr[i] > max2nd && arr[i] != max1st) {
//         max2nd = arr[i];
//       }
//     }
//     return max2nd;
//   }
//   console.log(secondLargest(arr))

// let arry = [2, 4, 6, 8, 10, 12, 14, 16];
// let lastElement = arry.slice(-1);

// console.log(lastElement);

//   let str1='enter the any number of user enter'
//         let res=str1.split(' ');
//         var result
//         arr=[];
//         for(var j=0;j<res.length;j++){
//           var str=res[j]
//             for(var i=0;i<=str.length;i++){
//                 result=str.charAt(0).toUpperCase()+str.slice(1,str.length)
//             }
//             arr.push(result);
//         }
//         console.log(...arr); 

let str='enter the any number of your choice';
let res=str.split(' ');
arr=[]
for(let i=0;i<res.length;i++){
    let str1=res[i]
    for(j=0;j<str1.length;j++){
        var result=str1.charAt(0).toUpperCase()+str1.slice(1,str1.length)
    }
    arr.push(result);
}
console.log(...arr);