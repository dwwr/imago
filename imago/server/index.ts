import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Image } from "../types/index.ts";

const app: Express = express();
app.use(cors());
app.use(bodyParser.json());

const port = 3001;

// simple in-mem storage- can replace with db, or cloud
const storage = {};

app.get("/", (req: Request, res: Response) => {
  res.json({ body: "Hello World!" });
});

app.post("/addImage", (req: Request, res: Response) => {
  const { name, image } = req.body;
  console.log(name, image);
  res.json({ body: "Image added" });
});

app.get("/getAllImages", (req: Request, res: Response) => {
  const images: Image[] = [];
  res.json({ body: images });
});

app.get("/getImagesByName", (req: Request, res: Response) => {
  const { name } = req.body;
  console.log(name);
  res.json({ body: "Image found" });
});

app.delete("/deleteImage", (req: Request, res: Response) => {
  const { id } = req.body;
  console.log(id);
  res.json({ body: "Image deleted" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
