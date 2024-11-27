require("dotenv").config();
const cors = require("cors");
const routes = require("./routes/v1/router");
const express = require("express");
const router = require("express").Router();
const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3001;

const keys = require("./keys.json");

app.set("keys", keys.cariscaforum);

require("./database/database.connection")(app.get("keys").db_name);

app.use("/api/v1", routes);

const corsOptions = [
  {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  },
  {
    origin: "https://cariscabusinessforum.com/",
    optionsSuccessStatus: 200,
  },
  {
    origin: "https://dev.cariscabusinessforum.com/",
    optionsSuccessStatus: 200,
  },
];

app.use(cors(corsOptions));

if (process.env.NODE_ENV === "development") {
  app.listen(PORT, () => console.log(`APP RUNNING ON PORT: ${PORT}`));
} else {
  app.listen(PORT);
}
