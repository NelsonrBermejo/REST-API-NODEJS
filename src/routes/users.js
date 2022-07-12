const { Router} = require('express');
const router = Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    await response.json();
    res.send('users');
});

module.exports = router;