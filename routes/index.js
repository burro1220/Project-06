const express = require('express');
const router = express.Router();

const { data } = require('../data.json');

router.get('/', (req, res) => {
    console.log(data);
   // console.log(res.locals);
    res.render('index'); 
});

module.exports = router;