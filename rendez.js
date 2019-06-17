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
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1; // ciklusváltozó, mely visszafelé megy a tömbön. Ciklust indítunk.
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--; // Hogy ne fusson a végtelenig.
    }
    arr[j + 1] = temp; // temp beszúrása j+1 helyre. Mert ha ez megsérül, már -1-en lennénk. Vagy a tömb elején vagyunk, vagy találtunk kisebb elemet.
  }
};
const bubbleSort = (arr) => {
  let n = arr.length;
  for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) { // Ha j nagyobb mint j + 1, akkor csere.
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

let k = generateArray(10);
console.log(k);
insertionSort(k);

selectSort(k);
bubbleSort(k);
console.log(k);
