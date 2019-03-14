function createFoldingCipher (input) {
    var inputArray = input.split("");

    for (var a = 0; a < inputArray.length; a++) {
        inputFromReverseDirection = inputArray[(inputArray.length - 1)  -  a]
        cipher[inputArray[a]] =  inputFromReverseDirection;
    }
}

function encode (wordArray) {
    for (var a = 0; a < wordArray.length; a++) {
        for (var code in cipher) {
            if (wordArray[a] === code) {
                encodedWord = encodedWord + cipher[code];
            }
        }
    }
    console.log(encodedWord);
    encodedWord = "";
}

function decode (wordArray) {
    for (var a = 0; a < wordArray.length; a++) {
        for (var code in cipher) {
            if (wordArray[a] === cipher[code]) {
                decodedWord = decodedWord + code;
            }
        }
    }
    console.log(decodedWord);
    decodedWord = "";
}

var firstWord = "hello";
var firstWordArray = firstWord.split("");

var encodedWord = "";

var firstEncodedWord = "svool";
var firstEncodedWordArray = firstEncodedWord.split("");

var decodedWord = "";
var cipher = {};

createFoldingCipher ("abcdefghijklmnopqrstuvwxyz");

var userInput = prompt("Input a word to be encoded");
var userInputArray = userInput.split("");

encode(userInputArray);

encode(firstWordArray);
decode(firstEncodedWordArray);