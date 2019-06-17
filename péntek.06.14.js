{ const fgv = (k) => {
  k = 10;
};
let a = 1;
fgv(a);
console.log(a); } // } Nem kell, csak azért, hogy blokkban tartsam az a-t és használhassam lent is.

const fgv2 = (k) => { // 5
  k = 5;
  console.log('Function: ', k);
};

let a = 10;
fgv2(a); // 10
console.log('Globalban: ', a);

const generateArray = (arr, size) => {
  for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * 11);
  }
};
let b = [];
generateArray(b, 10);
console.log(b);

// Véletlenszerű tömb generálása
const randomArray = (size) => { // A (size) azt jelenti, hogy változót vár a függvény megadásánál lent.
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * 15 + 1);
  }
  return arr;
};
