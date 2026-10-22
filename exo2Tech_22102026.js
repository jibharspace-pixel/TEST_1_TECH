for (let nombre =1; nombre <= 30; nombre++) {
    if (nombre % 2 === 0 && nombre % 3 === 0) {
        console.log("FizzBuzz");
    } else if (nombre % 3 === 0) {
        console.log("FizzBuzz");
    } else if (nombre % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(nombre);
    }
}