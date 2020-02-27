
// fazendo a requisição dos posts e comentários de uma vez
axios.all([
    axios.get('https://jsonplaceholder.typicode.com/posts'),
    axios.get('https://jsonplaceholder.typicode.com/comments')
    ]).then(axios.spread((posts, comments) => {

      this.posts = posts.data
      this.comments = comments.data

      console.log(posts.data);
      console.log(comments.data);

      var i,j,aux = 0;

      for(i=0;i<posts.data.length;i++){

        document.write('<h2>Post<h2> ' + posts.data[i].title + '<br>' + posts.data[i].body + '<br><br>');
       
        for(j=aux;j<comments.data.length;j++){
    
            if(posts.data[i].id == comments.data[j].postId)
                document.write('(comentário)' + '<br><br>' + '(nome)' + comments.data[j].name + '<br>'
                + comments.data[j].body + '<br><br>');
            else{
                aux = j;
                break;
            }
        }
        document.write('<hr>');
        console.log(j);
    }

 }))