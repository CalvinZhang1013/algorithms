const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  //Code Here
  for (let i = 1; i < array.length; i++) {
    let insertvalue = array[i];
    for (let j = 0; j < i; j++) {
      if (insertvalue < array[j]) {
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
        insertvalue = temp;
      }
    }
  }
}

function insertionSort2(array) {
  for (let j = 1; j < array.length; j++) {
    let key = array[j];
    let i = j - 1;

    while (i > 0 && array[i] > key) {
      array[i + 1] = array[i];
      i = i - 1;
    }
    array[i + 1] = key;
  }
}

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function insertionSort(array) {
//   //Code Here
//   for (let i = 1; i <= array.length; i++) {
//     let insertvalue = array[i];
//     for (let j = 0; j < i; j++) {
//       if (array[j] > insertvalue) {
//         let temp = array[j];
//         array[j] = insertvalue;
//         insertvalue = temp;
//       }
//     }
//   }
// }

insertionSort2(numbers);
console.log(numbers);
