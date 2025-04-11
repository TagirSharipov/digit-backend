const express = require('express');

const { getAll } = require('../data/event');
const { checkAuth } = require('../util/auth');

const router = express.Router();
router.use(checkAuth);
router.get('/', async (req, res, next) => {
  console.log(req.token);
  try {
    const events = await getAll();
    res.json({ events: events });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
