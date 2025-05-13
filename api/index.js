const express = require("express");
const routerApi = require("./routes");
const cors = require("cors");
const { errorLogs, errorHandler } = require("./middlewares/error.handler");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.send("Hola mi server en express");
});

routerApi(app);

app.use(errorLogs);
app.use(errorHandler);

app.listen(port, () => {
  console.log("Mi port is http://localhost:" + port);
});
