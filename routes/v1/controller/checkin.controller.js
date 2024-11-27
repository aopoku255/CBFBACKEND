const { checkIn } = require("../../../services/checkin.service");

const router = require("express").Router();

router.post("/checkin", async (req, res) => {
  return res.json(await checkIn(req, res));
});

module.exports = router;
