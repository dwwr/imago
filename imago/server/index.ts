import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app: Express = express();
app.use(cors());
app.use(bodyParser.json());

const port = 3001;

app.get("/", (req: Request, res: Response) => {
  res.json({ body: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
