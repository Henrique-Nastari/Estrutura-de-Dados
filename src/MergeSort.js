const mergeSort = (arr) => {
    if (arr.length <= 1) return arr; // Correção aqui

    const meio = Math.floor(arr.length / 2);
    const esquerda = arr.slice(0, meio);
    const direita = arr.slice(meio);

    return merge(mergeSort(esquerda), mergeSort(direita));
};

const merge = (esquerda, direita) => {
    const resultado = [];
    let indexDaEsquerda = 0;
    let indexDaDireita = 0;

    while (indexDaEsquerda < esquerda.length && indexDaDireita < direita.length) {
        if (esquerda[indexDaEsquerda] < direita[indexDaDireita]) {
            resultado.push(esquerda[indexDaEsquerda]);
            indexDaEsquerda++;
        } else {
            resultado.push(direita[indexDaDireita]);
            indexDaDireita++;
        }
    }

    return [...resultado, ...esquerda.slice(indexDaEsquerda), ...direita.slice(indexDaDireita)];
};

// Exemplo de uso:
const arr = [3, 6, 8, 10, 1, 2, 1, 2];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // [1, 1, 2, 2, 3, 6, 8, 10]
