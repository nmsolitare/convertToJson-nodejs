const https = require('https')
//var url = 'https://npr-country-list.api.pens.com'

var url = 'https://gist.githubusercontent.com/azat-co/a3b93807d89fd5f98ba7829f0557e266/raw/43adc16c256ec52264c2d0bc0251369faf02a3e2/gistfile1.txt'

https.get(url, (response) => {
    let rawData = ''
    response.on('data', (chunk) => {
        rawData += chunk
    })
    response.on('end', ()=>{
        console.log(`API call is completed`)
        try {
            const parsedData = JSON.parse(rawData)
            console.log(`parsedData : ${parsedData}`)
        } catch (error) {
            console.error(`Error while parsing json : ${error.message}`)
        }
    })
}).on('error', (error) => {
    console.error(`Error log says : ${error.message}`)
})