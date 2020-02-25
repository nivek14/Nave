const mongoose = require("mongoose");

// campos que serão usados no banco de dados para as postagens
const postSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    postou:{
        type: String,
        required: true,
    },

    comentarios:[{
        type: String,
        required: true,
    }],

    createdAt: {
        type: Date,
        default: Date.now,
    },

});

// registrando model na aplicação
mongoose.model("post", postSchema);