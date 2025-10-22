// 程式碼寫這裡
// document.addEventListener("DOMContentLoaded", () => {

const url = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"

const form = document.querySelector("#searchForm")

const keyword = document.querySelector("#searchKeyword")

// const btn = document.querySelector("#btn")
    
// 表單有預設的summit，要先停止預設:用preventDefault
form.addEventListener("submit", (e) => {
    e.preventDefault()

    const query = keyword.value.trim()
                                // trim:刪除空白字元
    if(query !=""){
    fetch(url) 
     .then((resp) => {
        return resp.json()
     })
     .then((stations) => {
        stations.fliter((station) => {
            return station.ar.includes(query)
        })
        
    })

    }
})


   



// fetch(url) 
//     .then((resp) => {
//         return resp.json()
//     })
//     .then((stations) => {
//         const searchResult = stations
//         .fliter((station) => {
//             return station.sna
//         })
//         console.log(stations.length);
        
//     })