import { Image } from "../types/index.ts";

export class ImageDB {
  storage: Record<string, Image> = {};

  constructor() {
    this.storage = {};
  }

  async saveImage(key: string, image: Image) {
    this.storage[key] = image;
    return this.storage[key];
  }

  async getAllImages() {
    return Object.values(this.storage);
  }

  async getAllImagesByName(query: string) {
    return Object.values(this.storage).filter((image) =>
      image.name.includes(query),
    );
  }

  async deleteImage(key: string) {
    delete this.storage[key];
  }
}
