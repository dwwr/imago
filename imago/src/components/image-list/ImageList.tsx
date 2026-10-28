import type { ImageCollection } from "../../../types";
import { ImageListItem } from "../image-list-item/ImageListItem";

export const ImageList: React.FC<ImageListProps> = ({
  handleDelete,
  images,
}) => {
  return (
    <div>
      <h2>{`${images.length} Images`}</h2>
      {images.map((image, i) => {
        return (
          <ImageListItem handleDelete={handleDelete} image={image} key={i} />
        );
      })}
    </div>
  );
};

interface ImageListProps {
  handleDelete: (key: string) => void;
  images: ImageCollection;
}
