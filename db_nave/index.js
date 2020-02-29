const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

// criando banco de dados
mongo.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created...");
  console.log('\n');
  db.close();
});


// ========================  criando e populando tabelas ========================

// inserindo os dados nas tabelas
mongo.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("nave_db");
    // inserindo dados na tabela de posts
    var myobj =[
            {
                id: 1,
                author: 'steven wilson',
                title: 'i like that band called porcupine tree',
                text: ' scelerisque ullamcorper a, tristique id nibh. Fusce volutpat',
            },

            {
                id: 2,
                author: 'david',
                title: 'what will the dark side of the moon be like',
                text: ' blandit augue sit amet erat laoreet egestas. Nulla facilisi. ',

            },

            {
                id: 3,
                author: 'maynard',
                title: 'you know the fibonacci sequence',
                text: 'utrum rutrum, sem orci sodales sapien, ut varius augue diam rutrum turpis. ',
            }
    ];
    dbo.collection("posts").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        console.log('\n');
        db.close();
    });
});

// inserindo dados na tabela de comments
mongo.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("nave_db");
    // inserindo dados na tabela de comments
    var myobj =[

        {
            id: 5,
            postId: 1,
            message: 'lus aliquet libero, ac congue dui eros sit amet enim.',
            author: 'edgar',
        },

        {
            id: 2,
            postId: 1,
            message: ' litora torquent per conubia nostra, per inceptos himenaeos.',
            author: 'waters',
        },

        {
            id: 4,
            postId: 2,
            message: 'Phasellus et metus non mauris commodo placerat.',
            author: 'wright',
        },

        {
            id: 6,
            postId: 2,
            message: 'lass aptent taciti sociosqu ad litora torquent per conubia.',
            author: 'mason',
        },
        
        {
            id: 9,
            postId: 3,
            message: 'erat vestibulum. Proin id urna nec nisl gravida euismod.',
            author: 'robert fripp',
        },

        {
            id: 7,
            postId: 3,
            message: ' Donec consectetur eleifend semper.',
            author: 'lake',
        },

    ];
    dbo.collection("comments").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        console.log('\n');
        db.close();
      });
});

// ==============================================================================

// fazendo join com a tabela dos comentários, para que seja possível acessar o post_id
/* será retornado os dados do post com seus respectivos comentários*/
mongo.connect(url, function(err, db) {

    if (err) throw err;
    var dbo = db.db("nave_db");

    dbo.collection('posts').aggregate([

        // adicionando o lookup para realizar o join
        { $lookup:
            {
                from: 'comments',
                localField: 'id',
                foreignField: 'postId',
                as: 'nave'
            }
        }]).toArray(function(err, res) {

            if (err) throw err;
            const resp = res;

            console.log('POSTS NA ORDEM COM SEUS COMENTÁRIOS');
            console.log('\n');

            var i;

            // posts seguidos de seus comentários
            for(i=0;i<resp.length;i++){

                console.log('Post %d', i+1);
                console.log(resp[i]);
              
                console.log('\n');

                console.log('Comentários do post %d', i+1);
                console.log(resp[i].nave);
                
                console.log('\n');
            }

            // ordenando os posts por title
            console.log('ORDEM POR TITLE\n');
            console.log(resp.sort(function(a,b){
                return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
            }));
            
            db.close();
        });
});

