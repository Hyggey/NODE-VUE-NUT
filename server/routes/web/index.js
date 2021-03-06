module.exports = app =>{
    const router = require('express').Router()

    const Category = require('../../models/Category')

    const Item = require('../../models/Item')

    const Ad = require('../../models/Ad')

    const Sale = require('../../models/Sale')

    // 前端获取首页轮播图的接口
    router.get('/imgs', async(req,res) =>{
        const ads = await Ad.find().lean()
        res.send(ads)
    })

    // 前端获取分类接口
    router.get('/classify', async(req,res) =>{
        const classify = await Category.find().populate({
            path:'foodsList'
        }).lean()
        res.send(classify)
    })

    // 前端首页获取商品接口
    router.post('/goods',async(req,res) =>{
        const goods = await Item.find().lean()
        res.send(goods)
    })

    // 前端获取具体商品的接口
    router.post('/goodsDetail/:id',async(req,res) =>{
        const goodsItem = await Item.findById(req.params.id).lean()
        res.send(goodsItem)
    })

    // 前端获取促销活动的接口
    router.post('/activity',async(req,res) =>{
        const activity = await Sale.find().populate('cheap.cheapGoods hot.hotGoods').lean()
        res.send(activity)
    })

    // 前端关键字搜索的接口
    router.post('/msg/:name',async(req,res) =>{
        const data = await Item.find({"name": {$regex: req.params.name, $options:'i'}}).lean()
        res.send(data)
    })


    app.use('/web/api',router)
}