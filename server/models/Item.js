const mongoose  = require('mongoose')

const schema = new mongoose.Schema({
    name:{type:String},
    // 这里的parent是name的父级，在monbodb数据库中必须这样定义，ObjectId就是mongodb数据库自己生成的那个id
    //  ref表示关联哪个模型，在这里就是关联本身 Category schema模型
    icon:{type:String},
    price:{type:String},
    oldPrice:{type:String},   //老价格
    discount:{type:String},   // 折扣，打几折
    desc:{type:String},
    // 分类，是当季新品，还是进口食品，注意这里一个商品可能有多个分类,要用数组表示
    categories:[{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}],
    goodsImg:[{
        image:{type:String}
    }],
    // 详情 符文本编辑器
    body:{type:String}
})

// schema.virtual('children',{
//     localField:'_id',
//     foreignField:'categories',
//     justOne:false,
//     ref:'Category'
// })


module.exports = mongoose.model('Item',schema)