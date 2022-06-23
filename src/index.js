import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// function moveZeros(arr) {
//   let zeros = [];
//   let norm = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     element === 0 ? zeros.push(0) : norm.push(element);
//   }
//   return norm.concat(zeros);
// }

// function moveZeros(arr) {
//   arr.map((elem, index) => {
//     if (elem === 0) {
//       let zr = arr.splice(index, 1);
//       arr.push(...zr);
//     }
//   });
//   return arr;
// }

//console.log(moveZeros([1, 0, 2, 1, 1, 0, 0, 3, 0, 1])); // returns[false,1,1,2,1,3,"a",0,0]

// [1, 2, 1, 1, 3, 1, 0, 0, 0, 0];

// Stop gninnipS My sdroW!

// function spinWords(string) {
//   if (string.indexOf(" ", 0) != -1) {
//     return string
//       .split(" ")
//       .map((elem) =>
//         elem.length >= 5 ? elem.split("").reverse().join("") : elem
//       )
//       .join(" ");
//   }
//   return string.length >= 5 ? string.split("").reverse().join("") : string;
// }

// //console.log(spinWords("Welcome")); // "emocleW")
// console.log(spinWords("Hey fellow warriors")); //, "Hey wollef sroirraw")

//let a1 = ["arp", "live", "strong"];

//let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

// function inArray(array1, array2) {
//   let res = [];
//   for (let i = 0; i < array1.length; i++) {
//     const element = array1[i];
//     let add = false;
//     array2.map((el) => {
//       if (el.includes(element, 0)) {
//         add = true;
//       }
//     });
//     if (add) {
//       res.push(element);
//     }
//   }
//   return res.sort();
// }

// function inArray(array1,array2){
//   return array1
//     .filter(a1 => array2.find(a2 => a2.match(a1)))
//     .sort()
// }

//console.log(a1.find((a1) => a1.includes("r")));

//console.log(inArray(a1, a2)); // ["arp", "live", "strong"];

// function countSmileys(arr) {
//   let reg = /[;|:][-|~]?[D:)]/gi;
//   let res = arr.filter((elem) => elem.match(reg));
//   return res.length;
// }

// console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]));

// function zero() {
//   return operate(
//     0,
//     arguments.length > 0 ? arguments[0][0] : "undefined",
//     arguments.length > 0 ? arguments[0][1] : "undefined"
//   );
// }
// function one() {
//   return operate(
//     1,
//     arguments.length > 0 ? arguments[0][0] : "undefined",
//     arguments.length > 0 ? arguments[0][1] : "undefined"
//   );
// }
// function two() {
//   return operate(
//     2,
//     arguments.length > 0 ? arguments[0][0] : "undefined",
//     arguments.length > 0 ? arguments[0][1] : "undefined"
//   );
// }
// function three() {
//   return operate(
//     3,
//     arguments.length > 0 ? arguments[0][0] : "undefined",
//     arguments.length > 0 ? arguments[0][1] : "undefined"
//   );
// }
// function four() {
//   return operate(
//     4,
//     arguments.length > 0 ? arguments[0][0] : "undefined",
//     arguments.length > 0 ? arguments[0][1] : "undefined"
//   );
// }
// function five() {
//   return operate(
//     5,
//     arguments.length > 0 ? arguments[0][0] : "undefined",
//     arguments.length > 0 ? arguments[0][1] : "undefined"
//   );
// }
// function six() {
//   return operate(
//     6,
//     arguments.length > 0 ? arguments[0][0] : "undefined",
//     arguments.length > 0 ? arguments[0][1] : "undefined"
//   );
// }
// function seven() {
//   return operate(
//     7,
//     arguments.length > 0 ? arguments[0][0] : "undefined",
//     arguments.length > 0 ? arguments[0][1] : "undefined"
//   );
// }
// function eight() {
//   return operate(
//     8,
//     arguments.length > 0 ? arguments[0][0] : "undefined",
//     arguments.length > 0 ? arguments[0][1] : "undefined"
//   );
// }
// function nine() {
//   return operate(
//     9,
//     arguments.length > 0 ? arguments[0][0] : "undefined",
//     arguments.length > 0 ? arguments[0][1] : "undefined"
//   );
// }

// function plus(num) {
//   return [num, "+"];
// }
// function minus(num) {
//   return [num, "-"];
// }
// function times(num) {
//   return [num, "*"];
// }
// function dividedBy(num) {
//   return [num, "/"];
// }

// function operate(num1, num2 = "undefined", oper = "undefined") {
//   if (oper == "undefined") {
//     return num1;
//   }
//   switch (oper) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       return parseInt(num1 / num2);
//     default:
//       break;
//   }
// }

//console.log(seven(times(five()))); //, 35
//console.log(four(dividedBy(eight())));

// four / eight - Expected: '0', instead got: '1'
// debugger;
// function zero(func) {
//   return func ? func(0) : 0;
// }
// function one(func) {
//   return func ? func(1) : 1;
// }
// function two(func) {
//   return func ? func(2) : 2;
// }
// function three(func) {
//   return func ? func(3) : 3;
// }
// function four(func) {
//   return func ? func(4) : 4;
// }
// function five(func) {
//   return func ? func(5) : 5;
// }
// function six(func) {
//   return func ? func(6) : 6;
// }
// function seven(func) {
//   return func ? func(7) : 7;
// }
// function eight(func) {
//   return func ? func(8) : 8;
// }
// function nine(func) {
//   return func ? func(9) : 9;
// }

// let plus = (num1) => (num2) => num1 + num2;
// let minus = (num1) => (num2) => num2 - num1;
// let times = (num1) => (num2) => num1 * num2;
// let dividedBy = (num1) => (num2) => parseInt(num1 / num2);

// let a = five();
// console.log(a, "a");

// console.log(seven(times(five()))); //, 35

let alphabet = "abcdefghijklmnopqrstuvwxyz";
function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split("")
    .map((element, index) => {
      return alphabet.indexOf(element, 0) + 1;
    })
    .filter((x) => x > 0)
    .join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
//"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")
