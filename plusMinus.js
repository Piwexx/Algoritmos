//HackerRank
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
     const n = arr.length;

    // Count positive, negative, and zero elements
    const positiveCount = arr.filter(num => num > 0).length;
    const negativeCount = arr.filter(num => num < 0).length;
    const zeroCount = arr.filter(num => num === 0).length;

    // Calculate ratios
    const positiveRatio = positiveCount / n;
    const negativeRatio = negativeCount / n;
    const zeroRatio = zeroCount / n;

    // Print ratios with 6 decimal places
    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
