const express = require('express');
const router = express.Router();

//routes
router.get('/', (req,res) =>{
    //res.sendFile(path.join(__dirname + '/views/index.html'));
    //console.log(__dirname + '/views/index.html');
    //console.log(path.join(__dirname + '/views/index.html'));
    res.render('index.html',{ title: 'First Website'}); //index.ejs
});

router.get('/contact', (req, res) =>{
    res.render('contact.html', { title: 'Contact Page'});//contact.ejs
})

module.exports = router;