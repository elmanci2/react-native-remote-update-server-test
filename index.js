const express = require("express");
const path = require("path"); // Import the path module to handle routes
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/update", (req, res) => {
  console.log("Downloading update.json...");
  const filePath = path.join(__dirname, "update.json");
  res.download(filePath, "update.json", (err) => {
    if (err) {
      console.error("Error downloading the file:", err);
      res.status(500).send("Error downloading the file");
    }
  });
});

const bundleName = "bundles/orange.bundle"; // <-- Change this to the name of  bundle 

app.get("/bundle", (req, res) => {
  console.log("Downloading bundle...");
  const filePath = path.join(__dirname, bundleName); // Ensure the path to the JSON file is correct
  res.download(filePath, bundleName, (err) => {
    if (err) {
      console.error("Error downloading the file:", err);
      res.status(500).send("Error downloading the file");
    }
  });
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
