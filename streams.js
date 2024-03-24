const fs = require('fs')

const readStream = fs.createReadStream('./public/docs2.txt', { encoding: 'utf-8'})

const writeStream = fs.createWriteStream('./public/new_writefile.txt')

readStream.on('data', (chunk) => {
    console.log('===== chunk start========');
   // console.log(chunk.toString())
   console.log(chunk)

   writeStream.write('\n New Line \n')
   writeStream.write(chunk)
});

// Above write steam can be done with pipeing
// using pipeing

readStream.pipe(writeStream);