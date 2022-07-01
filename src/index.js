import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// const code = {
//   ".-": "a",
//   "-...": "b",
//   "-.-.": "c",
//   "-..": "d",
//   ".": "e",
//   "..-.": "f",
//   "--.": "g",
//   "....": "h",
//   "..": "i",
//   ".---": "j",
//   "-.-": "k",
//   ".-..": "l",
//   "--": "m",
//   "-.": "n",
//   "---": "o",
//   ".--.": "p",
//   "--.-": "q",
//   ".-.": "r",
//   "...": "s",
//   "-": "t",
//   "..-": "u",
//   "...-": "v",
//   ".--": "w",
//   "-..-": "x",
//   "-.--": "y",
//   "--..": "z",
//   "-----": 0,
//   ".----": 1,
//   "..---": 2,
//   "...--": 3,
//   "....-": 4,
//   ".....": 5,
//   "-....": 6,
//   "--...": 7,
//   "---..": 8,
//   "----.": 9,
//   "...---...": "SOS",
//   "-.-.--": "!",
//   "-.. - . ": "/",
//   ".-.-.-": "."
// };
// function decodeMorse(morseCode) {
//   return morseCode
//     .split("   ")
//     .map((el) => {
//       console.log(el, "el");

//       return el
//         .split(" ")
//         .map((word) => {
//           console.log(word, "wor");

//           return code[word] ? code[word] : word;
//         })
//         .join("");
//     })
//     .join(" ")
//     .toUpperCase();
// }

// console.log(decodeMorse("...---..."));
//'HEY JUDE'  ==  ···· · −·−−   ·−−− ··− −·· ·

const MORSE_CODE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  "-----": 0,
  ".----": 1,
  "..---": 2,
  "...--": 3,
  "....-": 4,
  ".....": 5,
  "-....": 6,
  "--...": 7,
  "---..": 8,
  "----.": 9,
  "...---...": "SOS",
  "-.-.--": "!",
  "-.. - . ": "/",
  ".-.-.-": "."
};

var decodeBits = function (bits) {
  // ToDo: Accept 0's and 1's, return dots, dashes and spaces
  return bits
    .split("")
    .filter((el, i) => {
      if (i % 2 == 0) return el;
    })
    .join("")
    .replace(/111/g, "-")
    .replace(/000/g, " ")
    .replace(/1/g, ".")
    .replace(/0/g, "");
};

// var decodeMorse = function (morseCode) {
//   // ToDo: Accept dots, dashes and spaces, return human-readable message
//   return morseCode
//     .replace(/./g, MORSE_CODE["."])
//     .replace(/-/g, MORSE_CODE["-"])
//     .replace(/ /g, "");
// };

function decodeMorse(morseCode) {
  return morseCode
    .split("  ")
    .map((el) => {
      console.log(el, "el");

      return el
        .split(" ")
        .map((word) => {
          return MORSE_CODE[word] ? MORSE_CODE[word] : word;
        })
        .join("");
    })
    .join(" ")
    .toUpperCase();
}

// console.log(
//   decodeBits(
//     "1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011"
//   )
// );

// ···· · −·−−   ·−−− ··− −·· ·

// .replace(/111/g, "-")
//     .replace(/000/g, " ")
//     .replace(/1/g, ".")
//     .replace(/0/g, "");

console.log(
  decodeMorse(
    decodeBits(
      "1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011"
    )
  )
);

// HEY JUDE
