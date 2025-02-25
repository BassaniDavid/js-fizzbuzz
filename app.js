
for (let i = 1; i <= 30; i++) {
    console.log(i)
    if(i % 3 == 0 && i % 5 !== 0 ) {
        console.log("Bizz")
    }
    if(i % 5 == 0 && i % 3 !== 0) {
        console.log("Buzz")
    }
}
