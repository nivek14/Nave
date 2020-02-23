// vetor de objetos
const objects = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

var i;

// percorrendo cada posição do vetor de objetos
for(i=0;i<objects.length;i++){
    // passando primeira letra do nome para maiuscula
    objects[i].nome = objects[i].nome.substring(0,1).toUpperCase().concat(objects[i].nome.substring(1));
    // printando na tela cada nome no formato certo
    document.write('Olá, ' + objects[i].nome + ' ' + objects[i].sobrenome + '!' + '<br>');
}