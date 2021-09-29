var express = require('express');
var router = express.Router();
var registerInitialChecks= require('../middleWare/registerChecks')
var register=require("../controlers/register")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * @required{email, firstName, lastName, password, confirm password}=req.body
 * level 1
 * email validation 
 * passoword validation 
 * password ==confirm passoword
 * 
 * level-2
 * js/sql injection
 * 
 * level-3
 * check if email already exist 
 * email in lowercase
 * done
 * 
 */

router.post('/resigter', registerInitialChecks, register)

module.exports = router;
