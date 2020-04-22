module.exports = app =>{
    const router = require('express').Router()

    const Category = require('../../models/Category')

    const Item = require('../../models/Item')

    router.get('/classify', async(req,res) =>{
        const classify = await Category.find().populate({
            path:'foodsList'
        }).lean()
        res.send(classify)
    })

    app.use('/admin/api',router)
}