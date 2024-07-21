const buscaSequencial = (arr, alvo) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === alvo){
            return i; // retorna o índice o alvo foi encontrado.
        }
    }
    return -1; // retorna -1 se o alvo não foi encontrado.
};

// Exemplo de uso:
const arr = [5, 3, 8, 4, 2];
const alvo = 4;
const index = buscaSequencial(arr, alvo);
console.log(index); // 3 (índice do elemento 4)