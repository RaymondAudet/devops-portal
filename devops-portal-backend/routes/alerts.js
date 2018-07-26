var express = require('express');
var router = express.Router();

//todo This is smelly but it's ok for now. No real persistence only memory for now
var persistence = [];

/* GET alerts page. */
router.get('/', function(req, res) {
    res.send(persistence)
});

/* POST http://localhost:8080/api/alerts */
router.post('/', function(req, res) {
    persistence.push(req.body);
    res.send(req.body)
});

module.exports = router;
