var str1,str2,maior;

str1 = prompt('Primeira String: ');
str2 = prompt('Segunda String: ');

console.log(str1);
console.log(str2);

maior = MaiorString(str1,str2);

console.log(maior);
document.write(maior);

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


