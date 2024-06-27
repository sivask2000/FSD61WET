//arrow functions program
// 1. Print odd numbers in an array

let printOddNumbers = arr => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

printOddNumbers([1, 2, 3, 4, 5]);


// 2. Convert all the strings to title caps in a string array

let convertToTitleCaps = arr => {
    return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
};

console.log(convertToTitleCaps(["hello", "world", "javascript"]));


// 3. Sum of all numbers in an array

let sumArray = arr => {
    return arr.reduce((acc, num) => acc + num, 0);
};

console.log(sumArray([1, 2, 3, 4, 5]));


// 4. Return all the prime numbers in an array

let isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

let findPrimes = arr => {
    return arr.filter(num => isPrime(num));
};

console.log(findPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9]));


// 5. Return all the palindromes in an array

let isPalindrome = str => {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
};

let findPalindromes = arr => {
    return arr.filter(word => isPalindrome(word));
};

console.log(findPalindromes(["madam", "hello", "racecar", "world"]));

