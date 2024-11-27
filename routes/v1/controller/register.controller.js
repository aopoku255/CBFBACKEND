const {
  postRegister,
  resendEmail,
} = require("../../../services/register.service");

const router = require("express").Router();

router.post("/register", async (req, res) => {
  return res.json(await postRegister(req));
});

router.post("/resendemail", async (req, res) => {
  return res.json(await resendEmail(req));
});

module.exports = router;
