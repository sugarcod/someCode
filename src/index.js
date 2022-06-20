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

String.prototype.toJadenCase = function () {
  return this.split(" ").map((elem) => {
    console.log(elem.substring(1, 100), "sub");
    return elem.charAt(0).toUpperCase() + elem.slice(1);
  });
};

let a = "How can mirrors can be real if our eyes aren't real";

console.log(a.toJadenCase());
