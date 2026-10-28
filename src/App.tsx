import React from "react";
import "./App.css";
import type { ImageCollection } from "../types";
import { Uploader } from "./components/uploader/uploader";
import { ImageList } from "./components/image-list/ImageList";
import { SearchInput } from "./components/search-input/SearchInput";
import { Client } from "./client";

const client = new Client();

function App() {
  const [currentImages, setCurrentImages] = React.useState<ImageCollection>([]);
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const handleGetAllImages = async () => {
    const images = await client.getAllImages();
    setCurrentImages(images);
  };

  const handleSearchImagesByName = async (input: string) => {
    setSearchQuery(input);
    const images = await client.getAllImagesByName(input);
    setCurrentImages(images);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await client.onFileUpload(e);
    await handleGetAllImages();
  };

  const handleDelete = async (key: string) => {
    await client.deleteImageByName(key);
    await handleGetAllImages();
  };

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleGetAllImages();
  }, []);

  return (
    <>
      <div>
        <h1>Image Uploader</h1>
        <div className="row">
          <SearchInput
            onChange={(e) => handleSearchImagesByName(e.target.value)}
            value={searchQuery}
          />
          <Uploader onFileUpload={handleFileUpload} />
        </div>
        <ImageList handleDelete={handleDelete} images={currentImages || []} />
      </div>
    </>
  );
}

export default App;
