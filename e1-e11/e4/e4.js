var str = 'teste 1 de 2 string 3';
var result = str.replace(/[0-9]/gi,'[removido]'); // trocando todos os números por "[removido]"

console.log(result);
document.write(result);


/* OBS: Apenas troquei todos os números que aparecem
   por "[removido]" usando o método para strings replace.*/