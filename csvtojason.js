const fs = require('fs')
const uuidv1 = require('uuid/v1')
const csv = require('csv-parser');

let count = 1
let jsonString = ''

fs.createReadStream('customer-data.csv')
  .pipe(csv()).on('data', (row) => {
      if(count == 1){
        jsonString += '['
      } else {
        jsonString += JSON.stringify(row)+","
      }
      count++
  })
  .on('end', () => {
    let newString = jsonString.substring(0, jsonString.length -1)
    newString += ']'
    const fileName = uuidv1()+".json"
    fs.writeFileSync(fileName, newString)
    console.log('CSV file successfully converted and saved in '+fileName);
});
