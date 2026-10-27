import type { ImageCollection } from "../../../types";
import { ImageListItem } from "../image-list-item/ImageListItem";

export const ImageList: React.FC<ImageListProps> = ({ images }) => {
  return images.map((image) => {
    return <ImageListItem image={image} />;
  });
};

interface ImageListProps {
  images: ImageCollection;
}
