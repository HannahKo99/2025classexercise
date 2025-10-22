// //            (裡面的東西叫參數 aprameter)
// function nihao(someone, ...c) {
//     console.log(someone);
//     console.log(c);
// }
// //   (引數 argument) 
// nihao(1, 2, 3, 4, 5)  //引數:呼叫上面的參數 

// function nihao(someone = " ok") {
//      console.log(someone);
//  }
 
//  nihao(1 )

// function clacBMI(height, weight) {
//     const bmi = clacBMI (170, 64)    
//     console.log(`weight/(height / 100)(height / 100)`);

//     return 
// }

// function clacBMI(height, weight) {
//     const h = height / 100
//     const result = weight / (h * h)
    
//     return result
// }

// const bmi = clacBMI(170 , 64)
// console.log(bmi);

function clacBMI(height, weight) {
    const result = weight / ((height / 100) * (height / 100))
    
    return result
}

const bmi = clacBMI(170, 64)
console.log(bmi);
