const http = require('http')
const postData = JSON.stringify({foo : 'bar'})

const options = {
    hostname : 'mockbin.com',
    port : 80,
    path : '/request?foo=bar&foo=baz',
    method : 'POST',
    headers : {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Content-Length' : Buffer.byteLength(postData)
    }
}

const requestObj = http.request(options, (response) => {
    response.on('data', (chunk) => {
        console.log(`chunk : ${chunk}`)
    })
    response.on('end', ()=>{
        console.log('No More chunk to get')
    })
})

requestObj.on('error', (error) => {
    console.error(`Request Error : ${error}`)
})

requestObj.write(postData)
requestObj.end()