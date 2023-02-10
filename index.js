// Iteration 1: Names and Input
let hacker1 = "John"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Bobby"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

for (let i = 0; i < 1; i++) {
    if (hacker1.length > hacker2.length) {
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
    }
    if (hacker1.length < hacker2.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    }
    if (hacker1.length == hacker2.length) {
        console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
    }
}

const UC = hacker1.toUpperCase()
console.log(UC.split(''))

function reverse(array) {
    let stringSplit = array.split('');
    let reverseArray = stringSplit.reverse();
    let joinedArray = reverseArray.join('');
    return joinedArray;
}

console.log(reverse(hacker1))

let arr = [hacker1, hacker2]

console.log(arr.sort())

    
/*
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/

// Iteration 3: Loops
