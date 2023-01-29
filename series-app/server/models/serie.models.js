const mongoose = require ('mongoose')
const SerieSchema = mongoose.Schema({
    titulo:{
        type:String
    },
    creador:{
        type:String
    },
    rating:{
        type:String,
        enum:['G','PG','R','NC']
    },
    genero:{
        type:String,
        enum:[
            'comedia',
            'drama',
            'horror'],
    },
    ano:{
        type:Number
    },
    portada:{
        type:String
    }

}, {timestamps:true})
const Series = mongoose.model('Series', SerieSchema)
module.exports = Series