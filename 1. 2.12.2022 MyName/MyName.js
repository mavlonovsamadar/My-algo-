// function MyName(name) {
//     return `Mening ismim ${name}`
// }
// console.log(MyName("Samandar"));

/////////////////////////////////////////////////////////////

// function MyName(name, age, hobby) {
//     return `Mening ismim ${name}. Mening yoshim ${age}da va yoqtirgan hobbim ${hobby}.`
// }
// console.log(MyName("Samandar", 30, "futbol"));

/////////////////////////////////////////////////////////////

function getInfo(a, b, c) {
    let data = {
        a: a,
        b: b,
        c: c
    }
   
    return `Mening ismim ${data.a}. yoshim ${data.b}da va Moshinam ${data.c}.`
}
alert(getInfo("Samandar", 30, "nexia-3"));