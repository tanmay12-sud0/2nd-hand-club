const Product = require("../models/product");
const slugify = require('slugify');

exports.create = async(req, res) => {
    try{
        
        req.body.slug = slugify(req.body.title);
        const newProduct = await new Product(req.body).save();
        
        res.json(newProduct);
    }catch(err){
        res.status(400).json({
            err: err.message,
        })
    }
    
}

// exports.createss = async(req, res) => {
//   try{
        
//     // req.body.slug = slugify(req.body.title);
//     const newProduct = await new Ads(req.body).save();
    
//     res.json(newProduct);
// }catch(err){
//     res.status(400).json({
//         err: err.message,
//     })
// }
    
// }


exports.listAll = async(req, res) => {
    try{
        
        
        const Products = await Product.find({}).limit(parseInt(req.params.count)).populate('category').populate('subs').sort([['craetedAt', 'desc']]).exec()

        
        res.json(Products);
    }catch(err){
        res.status(400).json({
            err: err.message,
        })
    }
    
}


// exports.removes = async (req, res) => {
//     try{
//         console.log(req.params.slug)
//         const deleted = await Product.findOneAndRemove({slug: req.params.slug}).exec();
//         res.json(deleted);
//         console.log(deleted)
//     }catch(err){
//        console.log(err);
//        return res.status(400).send("Product delete failed");
//     }
// }


exports.removes = async (req, res) => {
    try {
        console.log(req.params.slug)
      const deleted = await Product.findOneAndRemove({
        slug: req.params.slug,
      },{
        useFindAndModify: false
      }).exec();
      res.json(deleted);
      console.log(deleted)
    } catch (err) {
      console.log(err);
      return res.staus(400).send("Product delete failed");
    }
  };