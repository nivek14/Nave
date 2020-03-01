/* A função que irei aplicar nas strings
   será a mesma do primeiro exercício,
   ou seja, dentro da função que recebe
   os 3 argumentos, o argumento da função
   será a função que retorna a maior string.*/

var str1,str2;

str1 = prompt('Primeira String: ');
str2 = prompt('Segunda String: ');

console.log(str1);
console.log(str2);

// função com os três argumentos, uma função e duas strings
Resultado(MaiorString,str1,str2);

//================================================

// trabalhando com o tamanho da strings
function MaiorString(word1,word2){

    var t1,t2;

    // tamanho das strings
    t1 = word1.length;
    t2 = word2.length;

    if(t1 > t2)
        return word1;
    else if(t2 > t1)
        return word2;
    else 
        return 'strings de tamanhos iguais';

}

// função que irá chamar a outra função que será aplicada nas strings
function Resultado(fun,str1,str2){

    var maior = fun(str1,str2);
    console.log(maior);
    document.write(maior);

}

