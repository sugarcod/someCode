import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// let b = arra.sort((a, b) => {
//   return a.price - b.price;
// });

// let c = arra.map((elem) => elem.title);

// let d = arra.sort((a, b) => {
//   let oneName = a.title.toLowerCase(),
//     twoName = b.title.toLowerCase();

//   if (oneName < twoName) {
//     return -1;
//   }

//   if (oneName > twoName) {
//     return 1;
//   }

//   return 0;
// });

// let f = d.map((elem) => elem.title);

// console.log(f);

// function toCamelCase(str) {
//   let res = [];
//   let wk = str.split("");
//   let change = false;
//   for (let i = 0; i < wk.length; i++) {
//     if (wk[i] == "-" || wk[i] == "_") {
//       change = true;
//       continue;
//     }

//     if (change) {
//       console.log("change");
//       let a = wk[i].toUpperCase();
//       res.push(a);
//       change = false;
//       continue;
//     }
//     res.push(wk[i]);
//   }

//   return res.join("");
// }

//toCamelCase('') = An empty string was provided but not returned
// toCamelCase("the-stealth-warrior") = > theStealthWarrior
// toCamelCase("The-Stealth-Warrior") = > TheStealthWarrior

// function toCamelCase(str) {
//   var regExp = /[-_]\w/gi;
//   return str.replace(regExp, function (match) {
//     console.log(match);
//     return match.charAt(1).toUpperCase();
//   });
// }

// let a = toCamelCase("the-stealth-warrior");
// console.log(a, "a");

// function createPhoneNumber(numbers) {
//   let nm = numbers.join("");
//   return nm.replace(/([0-9]{3})([0-9]{3})([0-9]{4})/g, ($0, $1, $2, $3, $4) => {
//     return `(${$1}) ${$2}-${$3}`;
//   });
// }
// let reg = "/([0-9]{3})s[0-9]{3}-[0-9]{2}";
// //createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890")
// let a = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
// console.log(a, "a");

// let num = 1234;
// console.log(
//   num
//     .toString(2)
//     .split("")
//     .reduce((sum, elem) => +sum + +elem, 0)
// );

// String.prototype.toJadenCase = function () {
//   return this.replace(/(^|\s)[a-z]/g, (a) => {
//     console.log(a, "aa");
//     return a.toUpperCase();
//     // let b = a
//     //   .split("")
//     //   .map((elem, index) => (index == 0 ? elem.toUpperCase() : elem));
//     // return b.join("");
//   });
// };

// String.prototype.toJadenCase = function () {
//   return this.split(" ").map((elem) => {
//     console.log(elem.substring(1, 100), "sub");
//     return elem.charAt(0).toUpperCase() + elem.slice(1);
//   });
// };

// let a = "How can mirrors can be real if our eyes aren't real";

// console.log(a.toJadenCase());

// debugger;
// function duplicateEncode(word) {
//   let ar = word.split("");
//   let res = [];
//   ar.map((elem, index, arr) => {
//     if (
//       arr.includes(elem.toLowerCase(), index == arr.length - 1 ? 0 : index + 1)
//     ) {
//       if (arr.includes(elem.toLowerCase(), index + 1)) {
//         res.push("(");
//       } else {
//         res.push(")");
//       }
//     } else {
//       res.push("(");
//     }
//   });

//   return res.join("");
// }

// duplicateEncode("din"); //  "((("
// duplicateEncode("recede"); // "()()()"
// duplicateEncode("Success"); //")())())"

// function duplicateEncode(word) {
//   let ar = word.split("");
//   let res = [];

//   for (let i = 0; i < ar.length; i++) {
//     let element = ar[i];
//     let origin = 0;
//     for (let k = 0; k < ar.length; k++) {
//       if (element.toLowerCase() == ar[k].toLowerCase()) {
//         origin++;
//       }
//     }
//     origin > 1 ? res.push(")") : res.push("(");
//   }
//   return res.join("");
// }
// debugger;
// function duplicateEncode(string) {
//   var occurances = string
//     .toLowerCase()
//     .split("")
//     .reduce(function (prev, curr, index, arr) {
//       if (prev[curr] == undefined) {
//         prev[curr] = 1;
//       } else {
//         prev[curr] += 1;
//       }

//       return prev;

//       // occ[cha] = (occ[cha] || 0) + 1;
//       // return occ;
//     }, {});
//   // return string.toLowerCase().replace(/[\S\s]/g, function (cha) {
//   //   return occurances[cha] > 1 ? ")" : "(";
//   // });

//   return string.toLowerCase().replace(/[a-zA-Z]/gi, (el) => {
//     return occurances[el] > 1 ? ")" : "(";
//   });
// }

// console.log(duplicateEncode("Success"));

// function gogo(st) {
//   let res = st.split("").reduce(function (e, i) {
//     console.log(e, "e");
//     console.log(i, "i");
//   });
// }

// console.log(gogo("mother"));

// let b = {
//   c: 12
// };

// console.log(b.c);
// b.c = 123;
// console.log(b.c);

function highAndLow(numbers) {
  let res = numbers
    .split(" ")
    .sort((a, b) => a - b)
    .filter((elem, index, arr) => {
      //return (index == 0) | (index == arr.length - 1) ? elem : null;
      console.log(arr.length, "arr");
      if (arr.length == 1) {
        return elem;
      }

      if (index == 0) {
        console.log("0000");

        return elem;
      }
      if (index == arr.length - 1) {
        console.log("1111");
        return elem;
      }
    });

  if (res.length == 1) {
    res.push(res[0]);
  }

  return res.reverse().join(" ");
}

//highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"); // "42 -9"

console.log(highAndLow("42"));
