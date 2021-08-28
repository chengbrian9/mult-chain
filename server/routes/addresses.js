const express = require('express');

const fileController = require('../controllers/fileController.js');

const router = express.Router();


router.post('/:id', 
  fileController.getWatchlist,
  fileController.addWatchlist,
  (req, res) => {
    return res.status(200).json({watchlist: res.locals.watchlist})
})

router.delete('/:id',
  fileController.getWatchlist,
  fileController.removeWatchlist,
  (req, res) => {
    return res.status(200).json({watchlist: res.locals.watchlist})
})


module.exports = router;