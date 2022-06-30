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
//'HEY JUDE'
