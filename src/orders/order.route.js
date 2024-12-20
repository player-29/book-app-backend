const express= require('express');
const { createAOrder, getOrderByEmail } = require('./order.controller');
const router = express.Router();


//create order endpoint
router.post("/",createAOrder); 


//get order by email endpoint
router.get("/email/:email", getOrderByEmail);

module.exports= router