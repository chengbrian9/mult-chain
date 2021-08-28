const express = require('express');

const fileController = require('../controllers/fileController.js');

const router = express.Router();

router.get('/',
  fileController.getWatchlist,
  (req, res) => {
    return res.status(200).send(res.locals.watchlist)
})


module.exports = router;