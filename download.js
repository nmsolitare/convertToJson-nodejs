const http = require('http')
const fs = require('fs')
const path = require('path')
const pageURL = 'http://www.google.com'
const writeFileModule = require('./writeHTMLFile.js')

const downloadPage = (url = pageURL) => {
    console.log('Downloading HTML for page : '+url)
    http.get(url, (response) => {
        let pageHTML = ''
        response.on('data', (chunk) => {
            pageHTML += chunk
        })
        response.on('end', () =>{
            writeFileModule(pageHTML)
            console.log('Page HTML is saved in pageHTML variable')
        })
        response.on('error', (error) => {
            console.error('There was an error while making a GET request: '+error.message)
        })
    }).on('error', (error) => {
        console.error('There was an error accesing the URL: '+error.message)
    })
}

downloadPage(process.argv[2])