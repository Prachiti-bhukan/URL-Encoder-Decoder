console.log("Welcome to the URL Encoder/Decoder\n\nWhat you want to try\n1. Encode\n2. Decode\n");

const readLineSync = require('readline-sync');
const userInput = readLineSync.question('Your Choice---> ');

 if(userInput==1)
{
const readLineSync = require('readline-sync');
const givenUrl = readLineSync.question('\n\nEnter the URL to be encoded:\n\n');
urlEncode(givenUrl);
}

else if(userInput==2)
{
const readLineSync = require('readline-sync');
const givenUrl = readLineSync.question('\n\nEnter the URL to be decoded:\n\n');
urlDecode(givenUrl);
}

else
{
  console.log("\n\nwrong Choice!!!\n\n");
}

function urlEncode(givenUrl)
{
console.log(`\n\nThe encoded URL is --->\n\n${encodeURIComponent("https://workat.tech/ide")}`);
}

function urlDecode(givenUrl)
{
console.log(`\n\nThe Decoded URL is --->\n\n${decodeURIComponent('https%3A%2F%2Fworkat.tech%2Fide')}`);
}