function selectionSort(vetor) {
    let menor;

    for (let i = 0; i < vetor.length - 1; i++) {
        menor = i;
        for (let j = i + 1; j < vetor.length; j++) {
            if (vetor[j] < vetor[menor]) {
                menor = j;
            }
        }
        if (i !== menor) {
            [vetor[i], vetor[menor]] = [vetor[menor], vetor[i]];
        }
    }
    return vetor;
}

// Exemplo de uso:
const vetor = [13, 1, 2, 5, 3, 8, 7, 12, 4, 9, 6, 11, 10];
console.log("Array original:", vetor);
const sortedVetor = selectionSort(vetor);
console.log("Array ordenado:", sortedVetor);