const Router = require ('express');
const router = Router();

router.get('/test', (req, res) =>{
    const data = {
        "name" : "Nelson",
        "web"  : "nelsonbermejo.com"
    };
    res.json(data);
});

module.exports = router;