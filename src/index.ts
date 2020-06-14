import express from "express";

const app = express();
const port = 3001;

app.get("/", (_, res) => {
  res.send("Hi from TypeScript!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
