const router = require("express").Router();

router.use("/", require("./controller/sponsors.controller"));
router.use("/", require("./controller/register.controller"));
router.use("/", require("./controller/confirmed.controller"));
router.use("/", require("./controller/checkin.controller"));

module.exports = router;
