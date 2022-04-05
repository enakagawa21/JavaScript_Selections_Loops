console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let counter = 1; counter <= 100; counter++){
if (counter %2 != 0)
console.log(counter)

}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let counter2 = 1; counter2 <= 100; counter2 ++){
if (counter2 % 15 == 0){
console.log(`FIZZBUZZ`)
}
else if(counter2 % 3 == 0){
    console.log(`FIZZ`)

}else if (counter2 %5 == 0 ){
    console.log(`BUZZ`)
}
}
