

let age = 20;
// 一個=是指掉的意思(賦值)，要比較(表示"等於"需要2or3個=
if (age >= 18) {
  console.log("已成年");
} else{
    console.log("未成年");
    }

    let year = prompt("請輸入年份")

    if (year % 4 == 0){
        if (year % 100 == 0){
            if (year % 400 == 0){

            console.log("閏年");            
        }   else{
            console.log("平年");            
        }   else {
            console.log("閏年");
        }