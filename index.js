const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/",(req,res) => {
    res.send("AutoDeployeX Deployement Successful");
});

app.get("/health",(req,res) => {
    res.json({ status: "ok"});
});

app.listen(PORT,() => {
    console.log(`Server running on PORT ${PORT}`);
    console.log(`open http://localhost:${PORT} in your browser`);
});