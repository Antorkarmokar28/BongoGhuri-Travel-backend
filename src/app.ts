import express from "express";
const app = express();
// if server is running on rout then this function exicuted
app.get("/", (req, res) => {
  res.send({
    success: true,
    message: "BongoGhuri server is running now",
  });
});

export default app;
