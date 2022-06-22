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

function spinWords(string) {
  if (string.indexOf(" ", 0) != -1) {
    return string
      .split(" ")
      .map((elem) =>
        elem.length >= 5 ? elem.split("").reverse().join("") : elem
      )
      .join(" ");
  }
  return string.length >= 5 ? string.split("").reverse().join("") : string;
}

//console.log(spinWords("Welcome")); // "emocleW")
console.log(spinWords("Hey fellow warriors")); //, "Hey wollef sroirraw")
