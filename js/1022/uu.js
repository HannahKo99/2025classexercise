const url = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"

fetch(url)
    .then((resp) => {
        return resp.json()
    })
    .then((stations) => {
        const result = stations
    })
   
    