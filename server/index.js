const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const data = require("./data");
const main_dashboard_chart_data =require("./main_dashboard_chart_data")

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PORT = process.env.PORT || 3233;

app.get("/", (req, res) => {
    res.send("Api is running.");
  });

app.get("/dashboard", (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.json(data);
  });

  
// for the main deshboard chart
app.get("/main_dashboard_chart", (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.json(main_dashboard_chart_data);
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;