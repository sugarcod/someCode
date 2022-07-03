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

// const MORSE_CODE1 = {
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
//   ".-.-.-": ".",
//   "": " "
// };

// var decodeBits = function (bits) {
//   // ToDo: Accept 0's and 1's, return dots, dashes and spaces
//   let start = bits.replace(/(^0+|0+$) /g, "").split("");
//   console.log(start, "start");
//   let b;
//   if (start.length > 8) {
//     b = start.filter((el, i) => {
//       if (i % 2 == 0) return el;
//     });
//   } else {
//     b = start;
//   }
//   console.log(b, "b");
//   let c = b.join("");
//   console.log(c, "c");
//   let d = c.replace(/111/g, "-");
//   console.log(d, "d");
//   let e = d.replace(/000/g, " ");
//   console.log(d, "e");
//   let f = e.replace(/1/g, ".");
//   console.log(f, "f");
//   let g = f.replace(/0/g, "");
//   console.log(g, "g");

//   return g;
// };

// function decodeMorse(morseCode) {
//   console.log(morseCode, "morseCode");

//   let a = morseCode.length <= 1 ? morseCode.split("") : morseCode.split(" ");
//   console.log(a, "a");
//   return a
//     .map((el) => {
//       return MORSE_CODE1[el] ? MORSE_CODE1[el] : el;
//     })
//     .join("")
//     .toUpperCase();
// }

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

// Expected: 'E', instead got: 'T'

let snail = function (a) {
  console.log(a, a.length, "array");
  let res = [];

  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    for (let k = 0; k < array.length; k++) {
      const element = array[k];
    }
  }
  return res;
};

console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);
//[1, 2, 3, 6, 9, 8, 7, 4, 5]

//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
