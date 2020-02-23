function men25(age){
    return age.idade < 25;
}

// vetor de objetos
const objects = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

var i,newObjects;

newObjects = objects.filter(men25);

console.log(newObjects);

for(i=0;i<newObjects.length;i++){
    document.write('id: ' + newObjects[i].id + ' ' + 'nome: ' + newObjects[i].nome + 
    ' ' + 'sobrenome: ' + newObjects[i].sobrenome + ' ' + 'idade: ' + newObjects[i].idade +
    '<br>');
}

/* OBS: No exercicio era pedido que imprimisse o objeto caso existisse
   com menos de 25 anos, porém, no vetor de objetos temos dois objetos
   com menos de 25 anos com os id's 2 e 4, usei a função filter() para
   pegar esses dois elementos, acabei printando os dois, o exercicio pede
   para que faça exatamente isso que realizei aqui ,porém,não é pedido que 
   fosse printado todos os elementos com menos de 25 anos, então talvez
   tenha que se usar a função find(), ela irá procurar algum objeto com
   menos de 25 anos. Segue o código com a função find():*/

/*
================= E9 com a find() ============================
// vetor de objetos
const objects = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

const newObject = objects.find(element => element.idade < 25);

console.log(newObject);
document.write('id: ' + newObject.id + ' ' + 'nome: ' + newObject.nome + 
              ' ' + 'sobrenome: ' + newObject.sobrenome + ' ' + 
              'idade: ' + newObject.idade);

*/

/* Deixei o código com a função filter() habilitado, o código com a função find()
   está funcionando, logo, se o correto é fazer com a função find(), basta tirar
   os comentários do trecho de código acima e comentar o trecho onde uso a filter().*/