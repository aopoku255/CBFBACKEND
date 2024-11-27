const { confirmAttendees } = require("../../../services/confirmed.service");

const router = require("express").Router();

router.post("/confirm-attendance", async (req, res) => {
  return res.json(await confirmAttendees(req));
});

module.exports = router;
