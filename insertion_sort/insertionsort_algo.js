const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  //Code Here
  for (let j = 2; j < array.length; j++){
    key = array[j];
    i = j - 1;
    while (i > 0 && array[i] > key) {
      array[i+1] = array[i];
      i = i - 1;
    }
    array[i+1] = key; 
  }
}


insertionSort(numbers);
console.log(numbers);
