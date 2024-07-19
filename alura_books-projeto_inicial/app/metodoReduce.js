function calcularValorTotalDosLivrosDisp(livros) {
    const somaTotal = livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);   //0 = valor que a soma vai começar
    return somaTotal * 0.8;
 }