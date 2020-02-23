var str = 'T35t3 d3 35t4g1o';

const dicionario = {
    4: 'a', 
    3: 'e', 
    1: 'i', 
    5: 's'
};

// trocando os números pelas letras usando o dicionário como referência.
var result = str.replace(/3/gi,dicionario[3]);
var result = result.replace(/5/gi,dicionario[5]);
var result = result.replace(/1/gi,dicionario[1]);
var result = result.replace(/4/gi,dicionario[4]);

console.log(result);
document.write(result);

/* OBS: Assim como no exercicio anterior, apenas foi utilizado
   o método replace para trocar os números da string pelas letras,
   o dicionário foi usado coomo referência para isso.*/
