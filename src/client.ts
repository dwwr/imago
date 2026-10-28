import type { Image } from "../types";

export class Client {
  async onFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files) {
      return;
    }

    const file = files[0];

    if (file === null) {
      console.log("fail");
      return;
    }

    const formData = new FormData();

    const imageData: Image = {
      lastModified: file.lastModified,
      name: file.name,
      size: file.size,
      type: file.type,
    };

    Object.entries(imageData).forEach((v) => {
      formData.append(v[0], v[1]);
    });
    formData.append("file", file);

    await fetch("http://localhost:3001/addImage", {
      method: "POST",
      body: formData,
    });
    await this.getAllImages();
  }

  async getAllImages() {
    const res = await fetch("http://localhost:3001/getAllImages");
    const { body } = await res.json();
    return body;
  }

  async getAllImagesByName(query: string) {
    const res = await fetch("http://localhost:3001/getImagesByName", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: query }),
    });
    const { body } = await res.json();
    return body;
  }

  async deleteImageByName(name: string) {
    const res = await fetch("http://localhost:3001/deleteImage", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key: name }),
    });

    if (!res.ok) {
      throw new Error(`Failed to delete image. Server status: ${res.status}`);
    }

    const { body } = await res.json();
    return body;
  }
}
