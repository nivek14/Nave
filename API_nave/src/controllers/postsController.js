const mongoose = require("mongoose");

const posts = mongoose.model("post");

module.exports = {
    // listando os posts com seus comentários da base de dados
    async index(req, res){
        const Post = await posts.find();
        return res.json(Post);
    },
    
    // criando um post e seus comentários 
    async criandoPost(req, res){
        const postando = await posts.create(req.body);
        return res.json(postando);
    }
}
