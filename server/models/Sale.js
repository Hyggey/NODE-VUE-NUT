const mongoose  = require('mongoose')

const schema = new mongoose.Schema({
    // 特价新品
    cheap:{
        name:{type:String},
        cheapGoods:[{type:mongoose.SchemaTypes.ObjectId,ref:'Item'}]
    },
    // 人气爆款
    hot:{
        name:{type:String},
        hotGoods:[{type:mongoose.SchemaTypes.ObjectId,ref:'Item'}]
    }
})

module.exports = mongoose.model('Sale',schema)