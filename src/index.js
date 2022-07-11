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
// let res = [];
// let addEnd = (num, arr) => {
//   arr.push(num);
// };

// let snail = function (a) {
//   if (Array.isArray(a)) {
//     if (a.length == 0) {
//       return [];
//     }
//   }
//   let down = true;
//   let inno = 0;
//   function go(index) {
//     for (let i = index; i < a.length; i++) {
//       const element = a[i];
//       down && i == 0 ? addEnd(element, res) : null;
//       down && (i > 0) & (i < a.length - 1)
//         ? addEnd(element[a.length - 1], res)
//         : null;
//       if (down && i == a.length - 1) {
//         for (let i = element.length - 1; i >= 0; i--) {
//           addEnd(element[i], res);
//         }
//         down = false;
//         inno++;
//       }
//     }
//     if (!down) {
//       for (let i = a.length - 2; i >= 1; i--) {
//         addEnd(a[i][inno], res);
//       }
//     }
//     console.log("end");
//   }
//   if (inno < a.length) {
//     console.log("start");
//     go(inno);
//   }
//   return res;
// };

//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

//(snail([[]]), []);
//snail([[1]]), [1]);

//  snail([
//       [1, 2, 3, 4, 5, 6],
//       [20, 21, 22, 23, 24, 7],
//       [19, 32, 33, 34, 25, 8],
//       [18, 31, 36, 35, 26, 9],
//       [17, 30, 29, 28, 27, 10],
//       [16, 15, 14, 13, 12, 11]
//     ]),

// let snail = (arr) => {
//   let res = [];
//   let row = 1;
//   let count = arr.length;

//   for (let i = 0; i < count; i++) {
//     for (let k = 0; k < arr.length; k++) {
//       let yes = true;
//       //console.log(arr[k], k, i, "arr[k]");

//       if (k == i) {
//         if (k == 0) {
//           res.push(arr[k].slice(k, arr.length));
//         } else {
//           res.push(arr[k].slice(k, arr.length - k));
//         }
//       }

//       if (k == arr.length - row) {
//         res.push(arr[k].slice(0, arr.length - row));
//       }
//       if (k !== i && k !== arr.length - row) {
//         res.push(arr[k][arr.length - row]);
//       }
//     }
//     row++;
//   }

//   return res;
// };
debugger;
let snail = (arr) => {
  let count = arr.length;
  let res = [];

  for (let i = 0; i < count; i++) {
    for (let k = i; k < count; k++) {
      let down = true;
      if (i == 0) {
        if (k == 0) res.push(arr[i]);
        if (k == count - 1) res.push(arr[k].reverse());
        if (k > 0) {
          res.push(arr[k][arr[k].length - 1]);
          down = false;
        }
        if (k > 0 && !down) {
          res.push(arr[k][0]);
        }
      }

      // if (k == i && i > 0) res.push(arr[k].slice(k, count - k));
      // if (k == count - i && i > 0) res.push(arr[k].slice(i, count - i));
    }
  }

  return res;
};

console.log(
  snail([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11]
  ])
);
/*
  0  - 5
 6 7  - 10 11
 12 13 -16 17


*/
