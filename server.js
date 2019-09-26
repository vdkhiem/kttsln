const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 5481;
console.log(PORT);

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
