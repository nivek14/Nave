var str = prompt('Digite as strings entre virgulas: ');
var list = []; // lista que irá conter as strings digitadas

console.log(str);

list = FazerSplit(list,str);
list = ArrumandoStrings(list);
Resultado(list);

/* Função que irá pegar as strings digitadas
   pelo usuário separadas por virgula e irá
   separar as strings individuamente na lista
   denominada list, cada posição da lista terá
   uma string que foi digitada.*/
function FazerSplit(lista,string){

    lista = string.split(",");
    return lista;

}

/* Caso a string que o usuário digite possua
   vários espaços desnecessários, essa função
   irá pegar cada string da lista e arruma-las
   para que fiquem padronizadas*/
function ArrumandoStrings(lista){

    var i;

    for(i=0;i<lista.length;i++){
        lista[i] = lista[i].trim();
    }

    return lista;

}

// Essa função irá printar as strings tanto na tela quanto no console
function Resultado(lista){

    console.log(lista);
    document.write(lista);

}


/* OBS: Na descrição do exercício foi pedido que nós implementassemos
        função que recebesse vários argumentos do tipo string e os 
        printasse de uma única vez, achei mais simples fazer uma 
        pequena abstração disso, em vez de passar várias strings como
        parâmetro e a função ter vários argumentos do tipo string, eu 
        apenas fiz com que todas as strings que o usuário digitou ficassem
        em uma lista e essa lista é a que passei para a função, fiz isso pois
        dessa forma fica mais simples e não existe o problema de declar várias
        strings, apenas vou alocando mais strings na lista, conforme o usuário
        vai colocando na entrada.
        
        A string de entrada ela é dividida por vírgulas, ou seja, temos uma grande
        string que possui internamente várias strings, então realizo um split para
        dividir essa grande string nas strings que o usuário digitou e vou alocando
        elas na lista, além disso, é feita uma correção nas strings, essa correção
        serve para caso o usuário coloque vários espaços desnecessários por exemplo,
        logo foi utilizada a função trim para isso, e depois temos a função que printa
        os valores das strings, esses valores são printados no console e na tela do 
        usuário, vale notar que o resultado printado na tela do usuário é o mesmo 
        quando comparamos com a entrada, porém o programa já foi rodado, sendo que 
        se formos comparar a lista de entrada com a lista de saida, ao final da 
        execução, temos resultadosdifentes" pois as strings caso estejam "erradas"
        elas estão corrigidas. */