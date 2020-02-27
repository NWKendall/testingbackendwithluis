const cohortsData = require('./model.js');

const router = require("express").Router();

router.get("/", (req, res) => {
  cohortsData.all()
    .then(cohorts => {
      res.status(200).json(cohorts)
    })
    .catch(({ name, message, code, stack}) => {
      res.status(500).json({ name, message, code, stack})
    })
});

module.exports = router;
