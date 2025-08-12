const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0,-100,-200,-400];

function bubbleSort(array) {
    //Code here
    for (let i = array.length -1; i >= 0; i--){
        for(let j = 1; j <=i; j++){
            if (array[j] < array[j-1]){
                let temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
            }
        }
    }
}

bubbleSort(numbers);
console.log(numbers);