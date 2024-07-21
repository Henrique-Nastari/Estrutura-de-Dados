const quickSort = (arr) =>{
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length-1];
    const left = [];
    const right = [];

    for (const element of arr .slice(0,-1)){
        (element < pivot ? left : right).push(element);
    }

    return [...quickSort(left), pivot,...quickSort(right)];
}
// Exemplo de uso:
const arr = [3, 6, 8, 10, 1, 2, 1];
const sortedArr = quickSort(arr);
console.log(sortedArr); // [1, 1, 2, 3, 6, 8, 10]