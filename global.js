
setTimeout( () => {
    console.log('setTimeout called')
    clearInterval(interval)
},3000 );

const interval = setInterval( () => {
    console.log('set interval is called')
},1000 )

console.log(__dirname)
console.log(__filename)