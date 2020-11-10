// BASICS
function add(n1: number, n2: number, sr: boolean, rp: string) {
  if (sr) {
    console.log(`${rp} ${n1 + n2}`);
  } else {
    return n1 + n2;
  }
}

const num1 = 1.8;
const num2 = 3;
const showRes = true;
const phrase = "The Resuls is: ";

add(num1, num2, showRes, phrase);

// OBJECTS
const country: {
  name: string;
  independence: string;
  totalIsland: number;
  president: string[];
  javaIsland: string[];
} = {
  name: "Indonesia",
  independence: "August 17, 1945",
  totalIsland: 17000,
  president: ["Soekarnoe", "Soehartoe"],
  javaIsland: ["East Java", "Center Java", "West Java"],
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
