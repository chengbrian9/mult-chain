const path = require('path')
const fileController = {};

const fs = require('fs');

fileController.getWatchlist = (req, res, next) => {
  const watchlist = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../watchlist.json')))
  if (!watchlist) {
    return next({
      log: 'fileController.getWatchlist: ERROR: Error getting watchlist data from watchlist.json file',
      message: { err: 'Error occurred in fileController.getWatchlist. Check server logs for more details.' },
    });
  }
  res.locals.watchlist = watchlist;
  return next();
};

fileController.addWatchlist = (req, res, next) => {
  const id = req.params.id;
  if (!res.locals.watchlist) {
    return next({
      log: 'fileController.updateWatchlist: ERROR: Error getting watchlist data from watchlist.json file',
      message: { err: 'Error occurred in fileController.updateWatchlist. Check server logs for more details.' },
    });
  }
  else {
    if (res.locals.favs[id]) {
      return next();
    } else {
      res.locals.watchlist[id] = true;
      fs.writeFileSync(path.resolve(__dirname, './data/watchlist.json'), JSON.stringify(res.locals.watchlist), (err) => {
        if (err) {
          return next ({
            log: 'fileController.addFav: ERROR: /* the error from the file system / other calls */',
            message: { err: 'fileController.addFav: ERROR: Check server logs for details' },
          });
        }
        return next();
      });
    };
  }
};

fileController.removeWatchlist = (req, res, next) => {
  const id = req.params.id;
  if (!res.locals.watchlist) {
    return next({
      log: 'fileController.removeFav: ERROR: Invalid or unfound required data on res.locals object - Expected res.locals.favs to be an object.',
      message: { err: 'fileController.removeFav: ERROR: Check server logs for details' },
    });
  } else {
    if (!res.locals.favs[id]) {
      return next();
    } else {
      delete res.locals.favs[id];
      fs.writeFileSync(path.resolve(__dirname, '../data/watchlist.json'), JSON.stringify(res.locals.watchlist), (err) => {
        if (err) {
          return next ({
            log: `fileController.removeFav: ERROR: /* the error from the file system / other calls */`,
            message: { err: 'fileController.removeFav: ERROR: Check server logs for details' },
          });
        }
      });
      return next();
    }
  }
};

module.exports = fileController;