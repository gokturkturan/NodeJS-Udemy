const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const rootDir = require("./util/path");

const app = express();

const a = require("./routes/a");
const b = require("./routes/b");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use(a);
app.use("/b", b);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "c.html"));
});

app.listen(3000);
