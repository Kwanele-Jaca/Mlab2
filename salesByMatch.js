'use strict';

const fs = require('fs');

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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // Loop through each sock
    for (let i = 0; i < ar.length; i++) {
        // Skip if already crossed out
        if (ar[i] === "x") continue;

        // Compare with the rest of the socks
        for (let j = i + 1; j < ar.length; j++) {
            if (ar[j] === "x") continue;

            // If a match is found, mark both as matched
            if (ar[i] === ar[j]) {
                ar[i] = "x";
                ar[j] = "x";
                break; // move on to the next sock
            }
        }
    }

    // Count the number of "x"
    let matched = 0;
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] === "x") {
            matched++;
        }
    }

    // Each pair is two socks
    return matched / 2;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
