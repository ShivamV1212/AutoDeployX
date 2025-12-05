const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

// Simple API endpoint for status check
app.get("/api/status", (req, res) => {
  res.send("AutoDeployX Deployment Successful 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser`);
});
