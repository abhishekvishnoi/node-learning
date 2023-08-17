console.log(1)

const fun = (a) => {
    console.log("2")
    a("Hello!");
}

console.log(3)

fun(( str )=> {

    console.log(str)
})