// const out = document.querySelector("#out")
// const inner = document.querySelector("#inner")

// out.addEventListener("click", () => {
//     console.log("out");
// },true)
// ture/flase決定捕獲期/冒泡期
// inner.addEventListener("click", () => {
//     console.log("inner");
    
// },false)

const out = document.querySelector("#out")
const inner = document.querySelector("#inner")

out.addEventListener("click", () => {
    console.log("out");
})

inner.addEventListener("click", () => {
    console.log("inner");
    
})