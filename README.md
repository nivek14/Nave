# Nave

 ## Desafio(exercícios de 1 a 11)
 
 Os exercícios de 1 a 11 possuem um arquivo **.html** e um arquivo **.js**, para executar os programas, basta abrir o arquivo **.html**, os testes forma feitos nos navegadores **Opera** e **Google Chrome**, as explicações dos programas estão nos arquivos **.js**, os comentários nesses arquivos explicam o funcionamento dos programas. 
 

## Exercício de Front-end

Neste exercício foi utilizada a biblioteca **axios** como foi pedido, para realizar as requisições da api, usei o método abaixo:

Exemplo:
```
axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // Both requests are now complete
  }));
  
```

Desta forma, para mim, foi mais simples de realizar as requisições e manipular os dados vindos da api. Assim como nos primeiros exercícios, este exercício possui dois arquivos, um **.html** e outro **.js**, para ver o funcionamento do programa basta abrir o arquivo **.html**, mais explicações do funcionamento do código estão presentes nos comentários do arquivo **.js**.


## Exercício de Back-end

Alguns pontos importantes para destacar deste exercício:

 - 	Para montar a api foi utilizado a biblioteca **express**.

 - 	Foi utilizado o padrão **mvc** para organização da api.

 - 	Foi utilizado o banco de dados **mongoDB** e utilizada a biblioteca **mongoose** para a modelar os dados da aplicação.

 -	 A ferramenta **Docker** foi usada para rodar o mongoDB.

 - 	A ferramenta **Robo 3t** foi usadas como a interface gráfica para o mongoDB.

 - 	Outra ferramenta usada foi o **insomnia**, esta ferramenta serviu para que fosse mais visual o 	entendimento dos dados       serem armazenados no banco de dados e quando eles fossem 	requisitados.

### Funcionamento

O **Docker** serviu para rodar a imagem do **mongoDB**, assim não foi necessário que eu fizesse uma instalação do 	mongoDB na minha máquina. Para instalar o **mongoDB** no **Docker** basta seguir os seguintes comandos:

 -  **$ docker pull mongo** (Para instalar o mongoDB no docker)
 -  **$ docker run –name mongodb  -p 27017:27017** (configurar o mongoDB no docker)
 -  **$$ docker start mongo** (start vai depender do nome que foi dado a imagem, no caso como exemplo deixei mongo)

Para verificar se o mongoDB está funcionando corretamente rodando diretamente, basta acessar em uma aba de algum navegador por **localhost:27017**, deve aparecer uma mensagem padrão.

Tanto o **Robo 3t** como o **insomnia** foram utilizados como recursos para uma visualização mais clara de que os dados estavam sendo inseridos no banco de dados, quanto se os **POSTS** E **GETS** estavam funcinando. Para testar a api, seria recomendado o uso das duas ferramentas, pois com elas será possível ver o funcionamento da api.

Comentários mais detalhados da implementação se encontram no projeto do exercício.

## (BONUS) Exercício de Banco de Dados

Neste exercíco foi utilizado o banco de dados **mongoDB**,também foi usado o **nodejs**, o projeto conta com um arquivo **.js** onde são realizadas as tarefas necessárias. O código possui alguns comentários contendo explicaçoes de partes mais importantes do programa.

Para executar basta usar o seguinte comando no console:

 -  **$ node index.js**
 
 Ao executar, será feito o print das tarefas requisitadas.














