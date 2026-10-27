import type { ImageCollection } from "../../../types";
import { ImageListItem } from "../image-list-item/ImageListItem";

export const ImageList: React.FC<ImageListProps> = ({
  handleDelete,
  images,
}) => {
  return images.map((image, i) => {
    return <ImageListItem handleDelete={handleDelete} image={image} key={i} />;
  });
};

interface ImageListProps {
  handleDelete: (key: string) => void;
  images: ImageCollection;
}
