function createAtBashCipher (input) {
    var inputArray = input.split("");

    for (var a = 0; a < inputArray.length; a++) {
        var inputFromReverseDirection = inputArray[(inputArray.length - 1)  -  a]
        atBashCipher[inputArray[a]] =  inputFromReverseDirection;
    }
}

function encode (word) {
    var encodedWord = "";
    var wordArray = word.split("");

    for (var a = 0; a < wordArray.length; a++) {
        for (var code in atBashCipher) {
            if (wordArray[a] === code) {
                encodedWord = encodedWord + atBashCipher[code];
            }
        }
    }
    console.log(encodedWord);
}

function decode (word) {
    var decodedWord = "";
    var wordArray = word.split("");

    for (var a = 0; a < wordArray.length; a++) {
        for (var code in atBashCipher) {
            if (wordArray[a] === atBashCipher[code]) {
                decodedWord = decodedWord + code;
            }
        }
    }
    console.log(decodedWord);
}

var atBashCipher = {};

var firstWord = "hello";
var firstEncodedWord = "svool";

createAtBashCipher ("abcdefghijklmnopqrstuvwxyz");

var userInput = prompt("Input a word to be encoded");

encode(userInput);
encode(firstWord);
decode(firstEncodedWord);