const mongoose  = require('mongoose')

const schema = new mongoose.Schema({
    name:{type:String},
    // 这里的parent是name的父级，在monbodb数据库中必须这样定义，ObjectId就是mongodb数据库自己生成的那个id
    //  ref表示关联哪个模型，在这里就是关联本身 Category schema模型
    icon:{type:String},
    price:{type:String},
    desc:{type:String},
    // 分类，是当季新品，还是进口食品，注意这里一个商品可能有多个分类,要用数组表示
    categories:[{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}],
})

module.exports = mongoose.model('Item',schema)