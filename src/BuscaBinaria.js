const buscaBinaria = (arr, alvo) => {
    let esquerda = 0;
    let direita = arr.length - 1;

    while (esquerda <= direita){
        const meio = Math.floor((esquerda + direita) / 2);
        if (arr[meio] === alvo){
            return meio; //Retorna o índice onde o alvo foi encontrado
        }
        if (arr[meio] < alvo){
            esquerda = meio + 1;
        } else {
            direita = meio - 1;
        }
    }
    return -1; //Retorna -1 caso o alvo não seja encontrado
};

// Exemplo de uso:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array deve estar ordenado
const alvo = 6;
const index = buscaBinaria(arr, alvo);
console.log(index); // 5 (índice do elemento 6)