const express = require("express");
const { create, listAll, removes, update, remove } = require("../controllers/product");
// const {  } = require("../controllers/auth");
const { authCheck,  adminCheck} = require("../middlerware/auth");

const router = express.Router()
//authCheck, adminCheck,
router.post('/product', authCheck, adminCheck, create);

router.get('/products/:count', listAll);
// router.get('/category/:slug',  read);
// router.get('/categories', list);
// router.put('/category/:slug', authCheck, adminCheck, update);
// router.delete('/category/:slug', authCheck, adminCheck, remove);
router.delete('/product/:slug', authCheck, adminCheck,removes)
module.exports = router;