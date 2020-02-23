function ordenar(a,b){

    let comp=0;

    if(a.idade < b.idade)
        comp = 1;
    else if(a.idade > b.idade)
        comp = -1;
    else if(a.idade == b.idade){
        if(a.id < b.id)
            comp = 0;
        else
            comp = 1;   // como comentado no final do código, esse é o número que podemos alterar o sinal
    }
        
    return comp;
        
}   

// vetor de objetos
const objects = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
].sort(ordenar);

console.log(objects);

for(i=0;i<objects.length;i++){
    document.write('id: ' + objects[i].id + ' ' + 'nome: ' + objects[i].nome + 
    ' ' + 'sobrenome: ' + objects[i].sobrenome + ' ' + 'idade: ' + objects[i].idade +
    '<br>');
}


/* OBS: O vetor de objetos está sendo ordenado da forma
        correta, a questão do ID para desempate eu pensei
        da seguinte forma, temos dois objetos que possuem
        a mesma idade, os objetos possuem ID's 2 e 4, 
        usando um registro de uma empresa por exemplo, o 
        funcinário que tem o ID 2 possui um registro mais 
        antigo, ele foi registrado antes do funcionário 
        com ID 4, logo deixei o objeto com ID 2 com prioridade
        maior vindo antes do objeto com ID 4, mas caso o 
        outro funcionário tivesse a prioridade, seria necessário
        fazer a troca de sinal de uma valor, isto está sinalizado 
        no código. Ao executar o código a saida será:

        id: 1 nome: juca sobrenome: da silva idade: 42
        id: 3 nome: matheus sobrenome: garcia idade: 28
        id: 2 nome: daniel sobrenome: gonçalves idade: 21
        id: 4 nome: gabriel sobrenome: pinheiro idade: 21
*/