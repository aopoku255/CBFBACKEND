const { postSponsors } = require("../../../services/sponsors.service");

const router = require("express").Router();

router.post("/sponsors", async (req, res) => {
  return res.json(await postSponsors(req));
});

module.exports = router;
