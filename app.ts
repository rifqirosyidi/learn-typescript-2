// BASICS
function add(n1: number, n2: number, sr: boolean, rp: string) {
  if (sr) {
    console.log(`${rp} ${n1 + n2}`);
  } else {
    return n1 + n2;
  }
}

// UNION TYPE
function combine(i1: number | string, i2: number | string) {
  let res;
  if (typeof i1 === "number" && typeof i2 === "number") {
    res = i1 + i2;
  } else {
    res = i1.toString() + i2.toString();
  }
  return res;
}

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
