const express = require('express');
const path = require('path')
const router = express.Router();


const index = path.resolve(__dirname, '../../dist/index.html');
router.post('/send', (req,res) => {
    res.sendFile(index);
})

module.exports = router