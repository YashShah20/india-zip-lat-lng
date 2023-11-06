const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
const data = require("./data.json");
const india = require("./india.json");

app.get("/india", (req, res) => {
  res.json(india);
});

app.get("/data", (req, res) => {
  res.json(
    data.map(({ name, lat, lon, country }) => ({
      name,
      lat: +lat,
      lon: +lon,
      country,
    }))
  );
});

app.listen(3000, () => {
  console.log(`app is running on port 3000`);
});
