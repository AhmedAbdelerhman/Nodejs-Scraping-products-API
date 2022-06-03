const express = require("express");

const cors = require("cors");
const router = require("./router/products");
const { status } = require("express/lib/response");
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);
app.get("/", (req, res) => {
  res.send(
    "<h1>welcome to products Api </h1>  <span>check documentation  <a href='https://github.com/AhmedAbdelerhman/products-API'>here</a> </span>"
  );
});
app.use((req, res) => {
  res.status(404).json({ status: "error", msg: "page not found" });
});

app.listen(port, () => {
  console.clear();
  console.log("connected");
});
