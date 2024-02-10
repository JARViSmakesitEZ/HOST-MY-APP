const express = require("express");
const cors = require("cors");
import simpleGit from "simple-git";
import { generate } from "./utils";
import path from "path";
import { getAllFiles } from "./files";
import { uploadFile } from "./aws";

const port: number = 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.post("/deploy", async (req: any, res: any) => {
  const repoUrl = req.body.repoUrl;
  const id = generate();
  await simpleGit().clone(repoUrl, path.join(__dirname, `output/${id}`));
  const files = getAllFiles(path.join(__dirname, `output/${id}`));
  // files.forEach(async (file) => {
  //   await uploadFile(file, path.join(file.slice(__dirname.length + 1), file));
  // });

  res.json({ id: id });
});

app.listen(port);
