import express, { type Express, type Request, type Response } from "express";
import multer from "multer";
import cors from "cors";
import bodyParser from "body-parser";
import { Image, ImageCollection } from "../types/index.ts";
import { ImageDB } from "./db.ts";

const port = 3001;
const app: Express = express();

const db = new ImageDB();

const upload = multer({
  storage: multer.diskStorage({
    destination: "images/",
  }),
});

app.use(
  bodyParser.json(),
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json());

app.use(
  "/images",
  express.static("images", {
    setHeaders: (res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
    },
  }),
);

app.get("/", (req: Request, res: Response) => {});

app.post(
  "/addImage",
  upload.single("file"),
  async (req: Request, res: Response) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const image = req.file;
    const { lastModified, name, size, type }: Image = req.body;

    const payload = {
      lastModified,
      name,
      size,
      type,
      url: `http://localhost:${port}/images/${image.filename}`,
    };
    const dbRes = await db.saveImage(image.originalname, payload);

    res.status(200);
    res.json({ url: dbRes.url });
  },
);

app.get("/getAllImages", async (req: Request, res: Response) => {
  const images: ImageCollection = await db.getAllImages();

  res.status(200);
  res.json({ body: images });
});

app.post("/getImagesByName", async (req: Request, res: Response) => {
  const query: string = req.body.query;
  const images: ImageCollection = await db.getAllImagesByName(query);

  res.status(200);
  res.json({ body: images });
});

app.delete("/deleteImage", async (req: Request, res: Response) => {
  const { key } = req.body;
  const dbRes = await db.deleteImage(key);

  res.status(200);
  res.json({ body: "Image deleted" });
});

app.listen(port);
