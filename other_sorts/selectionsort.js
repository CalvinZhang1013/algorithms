const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    //Code Here
    if (array.length === 1){
        return array[0];
    }
    let min = array[0];
    for (let i = 0; i < array.length; i++){
        if (min > array[i]){
            let temp = array[0];
            array[0] = array[i];
            array[i] = temp;
            min = array[0];
        }
    }
    return [min].concat(selectionSort(array.slice(1,array.length)));
}

console.log(selectionSort(numbers));