// 1. Print odd numbers in an array

// Anonymous function
let printOddNumbers = function(arr) {
    for (let num of arr) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    }
};

printOddNumbers([1, 2, 3, 4, 5]);

// IIFE
(function(arr) {
    for (let num of arr) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    }
})([1, 2, 3, 4, 5]);


// 2. Convert all the strings to title caps in a string array

// Anonymous function
let convertToTitleCaps = function(arr) {
    return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
};

console.log(convertToTitleCaps(["hello", "world", "javascript"]));

// IIFE
(function(arr) {
    let titleCaps = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    console.log(titleCaps);
})(["hello", "world", "javascript"]);


// 3. Sum of all numbers in an array

// Anonymous function
let sumArray = function(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
};

console.log(sumArray([1, 2, 3, 4, 5]));

// IIFE
(function(arr) {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    console.log(sum);
})([1, 2, 3, 4, 5]);


// 4. Return all the prime numbers in an array

// Anonymous function
let isPrime = function(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

let findPrimes = function(arr) {
    return arr.filter(num => isPrime(num));
};

console.log(findPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// IIFE
(function(arr) {
    let isPrime = function(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    
    let primeNumbers = arr.filter(num => isPrime(num));
    console.log(primeNumbers);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);


// 5. Return all the palindromes in an array

// Anonymous function
let isPalindrome = function(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
};

let findPalindromes = function(arr) {
    return arr.filter(word => isPalindrome(word));
};

console.log(findPalindromes(["madam", "hello", "racecar", "world"]));

// IIFE
(function(arr) {
    let isPalindrome = function(str) {
        let reversed = str.split('').reverse().join('');
        return str === reversed;
    };
    
    let palindromes = arr.filter(word => isPalindrome(word));
    console.log(palindromes);
})(["madam", "hello", "racecar", "world"]);


// 6. Return median of two sorted arrays of the same size

// Anonymous function
let findMedianSortedArrays = function(nums1, nums2) {
    let merged = [...nums1, ...nums2].sort((a, b) => a - b);
    let mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
};

console.log(findMedianSortedArrays([1, 3, 5], [2, 4, 6]));

// IIFE
(function(nums1, nums2) {
    let merged = [...nums1, ...nums2].sort((a, b) => a - b);
    let mid = Math.floor(merged.length / 2);
    let median = merged.length % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid];
    console.log(median);
})([1, 3, 5], [2, 4, 6]);


// 7. Remove duplicates from an array

// Anonymous function
let removeDuplicates = function(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// IIFE
(function(arr) {
    let uniqueArray = arr.filter((value, index, self) => self.indexOf(value) === index);
    console.log(uniqueArray);
})([1, 2, 2, 3, 4, 4, 5]);


// 8. Rotate an array by k times

// Anonymous function
let rotateArray = function(arr, k) {
    k = k % arr.length;
    let rotated = arr.slice(k).concat(arr.slice(0, k));
    return rotated;
};

console.log(rotateArray([1, 2, 3, 4, 5], 2));

// IIFE
(function(arr, k) {
    k = k % arr.length;
    let rotated = arr.slice(k).concat(arr.slice(0, k));
    console.log(rotated);
})([1, 2, 3, 4, 5], 2);



