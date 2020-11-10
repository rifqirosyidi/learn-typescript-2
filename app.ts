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
