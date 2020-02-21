const fs = require('fs')
const path = require('path')
const uuidv1 = require('uuid/v1')

module.exports = function(htmlString){
    const folderName = uuidv1()
    fs.mkdirSync(folderName)
    console.log(`HTML String : ${htmlString}`)
    let fileFullPath = path.join(__dirname,folderName, 'generated.html')
    fs.writeFileSync(fileFullPath, htmlString)
    console.log('File created at '+fileFullPath)
}