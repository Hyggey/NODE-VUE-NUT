const mongoose  = require('mongoose')

const schema = new mongoose.Schema({
    // 广告位名字
    name:{type:String},
    // 轮播图的图片+url
    items:[{
        image:{type:String},
        url:{type:String}
    }],
    // 快递运费
    delivery:{type:String},
    // 活动
    activities:[{
        item:{type:String}
    }],
    // 微信好友二维码
    friendImg: {type:String},
    // 收款二维码
    cashImg: {type:String}
})

module.exports = mongoose.model('Ad',schema)