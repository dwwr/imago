import type { Image } from "../../../types";
import styles from "./ImageListItem.module.css";

export const ImageListItem: React.FC<ImageListItemProps> = ({
  handleDelete,
  image,
}) => {
  return (
    <div className={styles.container} onClick={() => handleDelete(image.url!)}>
      <img src={image.url} />
    </div>
  );
};

interface ImageListItemProps {
  handleDelete: (key: string) => void;
  image: Image;
}
