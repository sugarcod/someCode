import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const NUMS = {
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  ten: "10",
  eleven: "11",
  twelve: "12",
  thirteen: "13",
  fourteen: "14",
  fifteen: "15",
  sixteen: "16",
  seventeen: "17",
  eighteen: "18",
  nineteen: "19",
  twenty: "20",
  thirty: "30",
  forty: "40",
  fifty: "50",
  sixty: "60",
  seventy: "70",
  eighty: "80",
  ninety: "90",
  hundred: "100"
};

function parseInt(string) {
  if (Number(string) >= 0) {
    return Number(string);
  }
  let res = [];
  let words = string.split(" ");

  console.log(words.length, "words.length");

  if (words.length == 1) {
    if (words[0].includes("-")) {
      words[0].split("-").map((el) => res.push(NUMS[el][0]));
    } else {
      return Number(NUMS[string]);
    }
  }
  console.log(words, "words");

  if (words.includes("hundred")) {
    words.map((el, index, arr) => {
      if (el.includes("-")) {
        el.split("-").map((word) => {
          res.push(NUMS[word].toString().charAt(0));
        });
      }
      if (el == "hundred" && index != arr.length - 1) {
        if (arr[index + 1].includes("-")) {
          res.push("");
        } else {
          res.push("0");
        }
      } else {
        res.push(NUMS[el]);
      }
    });
  }
  return Number(res.join(""));
}

// console.log(parseInt("two hundred forty-six")); //246
// console.log(parseInt("one hundred two")); //246
// console.log(parseInt("one")); //246
console.log(parseInt("one hundred")); //246
