const insertionSort = (arr) =>{
    for (let i=1; i<arr.length; i++){
        const key = arr[i];
        let j = i-1;

        // Move elementos de arr[0..i-1], que são maiores que key, para uma posição à frente de sua posição atual
        while (j>=0 && arr[j] > key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
};

// Exemplo de uso:
const arr = [12, 11, 13, 5, 6];
console.log("Array original:", arr);
const sortedArr = insertionSort(arr);
console.log("Array ordenado:", sortedArr);