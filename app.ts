// BASICS
function add(n1: number, n2: number, sr: boolean, rp: string) {
  if (sr) {
    console.log(`${rp} ${n1 + n2}`);
  } else {
    return n1 + n2;
  }
}

// UNION ALIASSES

type numOrStr = number | string;
type asType = "as-num" | "as-text";

// UNION TYPE
function combine(i1: numOrStr, i2: numOrStr, resConv: asType) {
  let res;
  if (
    (typeof i1 === "number" && typeof i2 === "number") ||
    resConv === "as-num"
  ) {
    res = +i1 + +i2;
  } else {
    res = i1.toString() + i2.toString();
    //   }
    //   if (resConv === "as-num") {
    //     return +res;
    //   } else {
    //     return res.toString();
    //   }
  }
  return res;
}

const combineNum = combine(12, 34, "as-num");
console.log(combineNum);

const combineStrNum = combine("12", "34", "as-num");
console.log(combineStrNum);

const num1 = 1.8;
const num2 = 3;
const showRes = true;
const phrase = "The Resuls is: ";

add(num1, num2, showRes, phrase);

// ENUMS
enum Status {
  PEACE = 1,
  AT_WAR,
  NOT_INDEPENDENT,
}

// OBJECTS
const country: {
  name: string;
  independence: string;
  totalIsland: number;
  president: string[];
  javaIsland: string[];
  symbol: [number, string];
  status: number;
} = {
  name: "Indonesia",
  independence: "August 17, 1945",
  totalIsland: 17000,
  president: ["Soekarnoe", "Soehartoe"],
  javaIsland: ["East Java", "Center Java", "West Java"],
  symbol: [62138, "Garuda"],
  status: Status.PEACE,
};

console.log(country);

// Array
let favoriteSport: string[];
favoriteSport = ["Football", "Volleyball"];

let mixedArr: any[];
mixedArr = [1, "Two", true];

console.log(favoriteSport);
console.log(mixedArr);

for (const president of country.president) {
  console.log(president);
}

country.javaIsland.forEach((island) => {
  console.log(island);
});

// DEFINE RETURN TYPE

// function add(n1: number, n2: number): string {
//   return n1 + n2
// }

function sum(n1: number, n2: number) {
  return n1 + n2;
}

function printRes(num: number) {
  console.log(`Res : ${num}`);
}

printRes(sum(1, 2));

// you can do this, but if you reassign
// let performAddition = sum;
// performAddition = 5 // you can, but you'll encounter an error because perform addition is a function not a number
// to solve this use type function declaration var a: Function

// let performAddition: Function;
let performAddition: (a: number, b: number) => number;
performAddition = sum;

console.log(performAddition(7, 8));

function sumWithHandle(a: number, b: number, c: (num: number) => void) {
  const res = a + b;
  c(res);
}

sumWithHandle(100, 123, (results) => {
  console.log(results);
});
