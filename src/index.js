import "./styles.css";
import "./main.sass";

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
  if (Object.keys(NUMS).includes(string)) {
    return Number(NUMS[string]);
  }

  let res = [];
  let stringParts = string.split(" ");
  if (stringParts.includes("hundred")) {
    stringParts.map((el, index, arr) => {
      console.log(el, index, arr, arr.length, "ingo");
      if (index == 0) {
        res.push(el);
      }
      if (arr.length == 2 && index !== 0) {
        res.push("zero");
      }
    });
  }

  console.log(res, "res");
}

//console.log(parseInt("twenty")); //20

//console.log(parseInt("two hundred")); //246
//console.log(parseInt("one hundred two")); /102
//console.log(parseInt("one")); //246
//console.log(parseInt("one thousand and fifty five")); //1055

function ipsBetween(start, end) {
  let first = start.split(".");
  let second = end.split(".");

  let res = 0;

  for (let i = 3; i >= 0; i--) {
    res += second[i] - first[i];
  }
  console.log(res, "res");
}

console.log(ipsBetween("150.0.0.0", "150.0.0.1")); // 1
console.log(ipsBetween("10.11.12.13", "10.11.13.0")); // 243
