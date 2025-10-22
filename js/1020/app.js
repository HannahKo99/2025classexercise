// const d = document.querySelector ("#hi")
// console.log(d);

// document對整份文件點擊有效
// document.addEventListener("click", () => {
//     console.log(123);
// })

// const btn = document.querySelector("#btn")

// btn.addEventListener("click", () => {
//      console.log(123);
//  })

const btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
     const div = document.querySelector("#hi");
     const currentText = div.textContent

     if(currentText == "Hello"){
        div.textContent = "World"
        } else {
            div.textContent = "Hello"
        }
     })


const btnplus = document.querySelector ("#plus")

btnplus.addEventListener("click", () => {
    const currentvalue = Number(add.value)
    add.value = currentvalue + 1
})


const btnminus = document.querySelector ("#minus")

// btnminus.addEventListener("click", () => {
//     const currentvalue = Number(add.value)

//     if(add.value > 1 ){
//     add.value = currentvalue - 1
//     }
// })

// btnminus.addEventListener("click", () => {
//     const currentvalue = Number(add.value)
//     add.value = currentvalue - 1

//     if(currentvalue <= 1 ){
//         add.value = 1
//     }
// })

btnminus.addEventListener("click", () => {
    const currentvalue = Number(add.value)
// early return
    if(currentvalue <= 1 ){
    return    
    }
        add.value = currentvalue - 1

})
