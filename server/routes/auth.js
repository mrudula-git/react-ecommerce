const express = require('express')

const router = express.Router();
// middleware auth
const {authCheck} = require("../middlewares/auth");
const {demo} = require("../middlewares/auth")
// controller
const { createOrUpdateUser } = require("../controllers/auth");
const {done}= require("../controllers/auth")
router.post("/create-or-update-user", authCheck,createOrUpdateUser )



module.exports = router;