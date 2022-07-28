const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dashboard_table_data= require("./dashboard_table_data");
const main_dashboard_chart_data =require("./main_dashboard_chart_data")
const url_data =require("./Stats_For_Links")

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PORT = process.env.PORT || 3233;

app.get("/", (req, res) => {
    res.send("Api is running.");
  });

  // for dashboard table data

app.get("/dashboard_table", (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.json(dashboard_table_data);
  });


// for the main deshboard chart
app.get("/main_dashboard_chart", (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.json(main_dashboard_chart_data);
  });

// for specific link stats

app.get('/:customeHashID',(req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const {customeHashID} =req.params;
  console.log(req.params);
  const singleID=url_data.find((single)=>single.customeHashID===customeHashID);
  console.log(singleID);
  if(!singleID){
    return res.status(404).send('ID not found')
  }
  res.json(singleID);
});

app.get("/link_stats", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.json(url_data);
});




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;