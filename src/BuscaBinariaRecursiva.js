const buscaBinariaRecursiva = (arr, alvo, esquerda = 0, direita = arr.length - 1) => {
    if (esquerda > direita) {
        return -1; // Retorna -1 se o alvo não for encontrado.
    }

    const meio = Math.floor((esquerda + direita) / 2);

    if (arr[meio] === alvo) {
        return meio; // Retorna a posição do alvo caso seja encontrado.
    }

    if (arr[meio] < alvo) {
        return buscaBinariaRecursiva(arr, alvo, meio + 1, direita);
    // biome-ignore lint/style/noUselessElse: <explanation>
    } else {
        return buscaBinariaRecursiva(arr, alvo, esquerda, meio - 1);
    }
};

// Exemplo de uso:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array deve estar ordenado
const alvo = 6;
const index = buscaBinariaRecursiva(arr, alvo);
console.log(index); // 5 (índice do elemento 6)
