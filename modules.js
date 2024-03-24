
//  const peoples = require('./peoples')

// console.log(peoples.siblings, peoples.ages);

// const {siblings, ages} = require('./peoples') // destructing

// console.log(siblings, ages)

// const os = require('os')

// console.log(os.platform(), os.version())

// return false;

const fs = require('fs')

// Read Files
fs.readFile('./public/doc1.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err)
    }
    console.log(data)
})

// Write Files

fs.writeFile('./public/docs2.txt', 'New doc created', 'utf-8', () => {
    console.log('file created')
})

// directories

if(!fs.existsSync('./assets')){
fs.mkdir('./assets', (err) => {
    if(err){
        console.log(err)
    }
    console.log('folder created')
})
}

// deleting files

if(fs.existsSync('./public/deletefile.txt')){
    fs.unlink('./public/deletefile.txt', (error) => {
        if(error){
        console.log(error)
        }
        console.log('file deleted')
    })
}