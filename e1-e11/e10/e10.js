function men30(age){
    return age.idade < 30;
}

// vetor de objetos
const objects = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

var i,newObjects;

newObjects = objects.filter(men30);

console.log(newObjects);

for(i=0;i<newObjects.length;i++){
    document.write('id: ' + newObjects[i].id + ' ' + 'nome: ' + newObjects[i].nome + 
    ' ' + 'sobrenome: ' + newObjects[i].sobrenome + ' ' + 'idade: ' + newObjects[i].idade +
    '<br>');
}