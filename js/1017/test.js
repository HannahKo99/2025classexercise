// const num = 100

// // if ( num % 2 == 1 ) {
// //     console.log("單數");
// // }   else{
// //     console.log("雙數");
// // }
// // 只適用於正數，負數會判斷錯誤

// if ( num % 2 != 0 ) {
//     console.log("單數");
// }   else{
//     console.log("雙數");
// }
// // != 0 不等於0，同時判斷正負數

//  for ( 初始值 ; 停止條件 ; 循環條件)
// for (let i = 0; i < 10; i = i + 1) {
//     console.log("hello");
// }

// for (let i = 0; i < 10; i = i + 2){
//     console.log(i);
// }

// let i = 0
// // "while" 如果條件變成 false，就停止執行循環內部
// // while 的重點放在重複循環的條件
// while (i < 10) {
//     console.log(i);

//     i = i + 1
// }
// // =0~9

// for (let i = 1; i < 10 , 
//     i = 1 * for (let j = 1; j < 10, j= j + 1){
//     console.log(j);
// } ){
//     console.log(i);
// }

// // 九九乘法表
// for (let i = 1; i < 10; i = i + 1 ){
//     for (let j = 1; j < 10 ; j = j + 1) {
//     console.log(`${i} x ${j} = ${i * j}`);
//     }
// }

// for (let i = 1 ; i < 6 ; i += 1 ){ 
//     console.log("*" . repeat(i));
// }

// for (let i = 1 ; i < 10 ; i = i + 2){ 
//     for (let j = 4; j <= 4; j -=1 ){
//         console.log( " " . repeat(j) . "*" . repeat(i))
//     }
// }

// for (let i = 1 ; i < 10 ; i = i + 2 ){
//     console.log("*" . repeat(i));
// }


for (let i = 1 ; i < 6 ; i += 1 ){
    const stars = (i = i * 2 - 1)
    const space = (i = 5 - i)

    console.log(` "*" . repeat(i) . ${space}+${stars}`);
}
