const http = require('https')
const url = 'https://npr-country-list.api.pens.com'
http.get(url, (response) => {
    let c = 0
  response.on('data', (chunk) => { 
      c++
    console.log(chunk.toString('utf8'))
  })
  response.on('end', () => {
    console.log(`response has ended with ${c} chunks.`)
  })
}).on('error', (error) => {
  console.error(`Got error: ${error.message}`)
})