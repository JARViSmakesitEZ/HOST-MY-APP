const express = require("express");
const cors = require("cors");
// import { generate } from "./utils";
const port: number = 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.post("/deploy", async (req: any, res: any) => {
  const repoUrl = req.body.repoUrl;
  console.log(repoUrl);
});

app.listen(port);
