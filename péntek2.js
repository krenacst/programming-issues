const generateArray = (size) => {
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * 15 + 1);
  }
  return arr;
};

const selectSort = (arr) => {
  let min = 0; // tömb indexe, legkisebb elem
  for (let i = 0; i < arr.length; i++) {
    min = i; // deklaráljuk, hogy az i lesz a legkisebb elem éppen
    for (let j = i; j < arr.length; j++) { // Min keresés
      if (arr[j] < arr[min]) { // Összehasonlítjuk az eddigi min-t az újabb elemmel.
        min = j; // Ha kisebb volt a j mint az eddigi min, akkor a j lesz az új min.
      }
    }
    let temp = arr[i]; // A két tömbelemet megcseréljük
    arr[i] = arr[min];
    arr[min] = temp;
  }
};
let k = generateArray(10);
console.log(k);
selectSort(k);
console.log(k);
