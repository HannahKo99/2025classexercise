// const nums = [ `A`, `B`, `C`, `D`, `E`]
// // 索引值從0開始
// console.log(nums[4]);
// // 最後一個 : console.log(nums[nums.length - 1])


// // 用for迴圈印出nums的每個元素
// for (let i = 0; i < 5; i++) {
//     console.log(nums[i]);    
// }

// // 高階函數
// // `nums`是讓函數叫出的參數出處，要加上函數才成立否則會not definded
// nums.forEach(function (x) {
//     console.log(x);    
// })

// const nums = [1, 2, 3, 4, 5]

// for (let i = 0; i < nums.length; i+=1) {
//     console.log(nums[i*2]);   
// }

// // map
// const nums2 = []



// // filter過濾篩選，符合條件留下
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = nums.filter (function (n){
//     return n % 2 == 0
// })
// // 取餘數記得==0
// console.log(result);

// map.filter都要記得寫回傳值"result"否則回傳值是undefinded
// filter後的值若是"0",會視為false,回傳值會不見


// // reduce
// const nums = [1, 2, 3, 4, 5]

// const result = nums.reduce(function( a , b){
//     return (a + b)
// }, 0)
// // "0"是初始值，告訴函數要從第一個開始
// console.log(result);



// 1-10的偶數平方和
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const tatol = nums
//     .filter(function(n){
//         return n % 2 == 0
//         })  
//     .map(function (n) {
//         return ( n * n )        
//     })
//     .reduce (function (acc , cv) {
//         return ( acc + cv )
//     })

//     console.log(tatol);
    
const tatol = nums
    .filter => {return (n % == 0);}
    .map => {return( n * n )}
    .reduce => {return(acc + cv)}

    console.log(tatol);
    