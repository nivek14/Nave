
// fazendo a requisição dos posts e comentários de uma vez
axios.all([
    axios.get('https://jsonplaceholder.typicode.com/posts'),
    axios.get('https://jsonplaceholder.typicode.com/comments')
    ]).then(axios.spread((posts, comments) => {

      this.posts = posts.data
      this.comments = comments.data

      console.log(posts.data);
      console.log(comments.data);

      // i e j são as variáveis de iteração
      // aux serve para manter o resultado de j sempre de onde ele parou
      // no segundo for abaixo, a variável j zeraria quando o primeiro for rodasse outra vez
      // para que não zere, usamos a aux, que guarda o último valor de j dentro do segundo laço
      var i,j,aux = 0;

      // for que irá percorrer o array com os objetos referentes aos posts
      for(i=0;i<posts.data.length;i++){

        document.write('<h2>(Post)<h2> ' + posts.data[i].title + '<br>' + posts.data[i].body + '<br><br>');
       
        // for que irá percorrer o array com os objetos refentes aos comentários
        for(j=aux;j<comments.data.length;j++){
            
            // verificando se o [id] do comentário atual é igual ao [postId] do comentário
            // se a verificação for verdadeira será printado os comentários logo abaixo do post atual
            if(posts.data[i].id == comments.data[j].postId)
                document.write('(comentário)' + '<br><br>' + 'nome: ' + comments.data[j].name + '<br>'
                +'comentário do usuário: ' + comments.data[j].body + '<br><br>');
            else{
                aux = j;
                break;
            }
        }
        document.write('<hr>');
        console.log(j);
    }

 }))


 /* OBS: Devo admitir que o estilo da página .html é bem simples,
    porém é possível destinguir um Post do outro, e também o que
    é um post e o que é um comentário. */