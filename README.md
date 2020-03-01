# Nave

 ## Desafio(exercícios de 1 a 11)
 
 Os exercícios de 1 a 11 possuem um arquivo **.html** e um arquivo **.js**, para executar os programas, basta abrir o arquivo **.html**, os testes forma feitos nos navegadores **Opera** e **Google Chrome**, as explicações dos programas estão nos arquivos **.js**, os comentários nesses arquivos explicam o funcionamento dos programas. 
 

## Exercício de Front-end

Nesse exercício foi utilizada a biblioteca **axios** como foi pedido, para realizar as requisições da api, usei o método abaixo:

Exemplo:
```
axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // Both requests are now complete
  }));
  
```

Desta forma, para mim, foi mais simples de realizar as requisições e manipular os dados vindos da api. Assim como nos primeiros exercícios, este exercício possui dois arquivos, um **.html** e outro **.js**, para ver o funcionamento do programa basta abrir o arquivo **.html**, mais explicações do funcionamento do código estão presentes nos comentários do arquivo **.js**.
