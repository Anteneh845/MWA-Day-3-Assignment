const express = require("express");
const router = express.Router();
const {listGames} = require("../controllers/games.controller")

router.get("/games", listGames)

module.exports = router;