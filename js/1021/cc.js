// const url = "https://jsonplaceholder.typicode.com/users"

// // const result = fetch(url)

// // console.log(result);

// // fetch(url).then((resp) => {
// //     console.log(resp);
    
// // })

// fetch (url)
//     .then((resp) => {
//         return resp.json()
//     })
//     .then((users) => {
//         users.forEach((user) => {
//             console.log(user.email);
//         });
//     })

// const url = "https://fakestoreapi.com/products"

// const result = fetch(url)

// fetch(url)
//     .then((resp) => {
//         return resp.json()
//     })
//     .then((products) => {
//         products.forEach((product) => {
//             console.log(product.title);
//         });
//     })
//     .catch((err) => {
//         console.log((err));
//     })

const url = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"

const result = fetch(url)

fetch(url)
    .then((resp) => {
        return resp.json()
    })
    .then((stations) => {
        const s1 = stations
            // .filter((station) => {
            //     return station.sarea == "中山區"
            // })
            .filter((station) => {
                return station.available_return_bikes >= 10
            })
            .filter((station) => {
                return station.ar.includes("民權西路")
            })
            .forEach((station) => {
                const address = station.ar
                const bikes = station.available_return_bikes
                console.log( `(${bikes}) ${address}`);
            });

        
    

        
        // ubikes.forEach((ubike) => {
        //     console.log(ubike.sna);
        // });
    })
    // .catch((err) => {
    //     console.log((err));
    // })