
const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error!', undefined)
        console.log(1)
        callback(undefined, [1, 4, 7])
    }, 2000)
}

console.log(2)

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }
    console.log(result)
})

console.log(3)