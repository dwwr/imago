import type { Image } from "../../../types";
import styles from "./ImageListItem.module.css";
import { TrashIcon } from "./TrashIcon";

export const ImageListItem: React.FC<ImageListItemProps> = ({
  handleDelete,
  image,
}) => {
  return (
    <div className={styles.container}>
      <img src={image.url} />
      <button
        className={styles.trashIcon}
        onClick={() => handleDelete(image.url!)}
      >
        <TrashIcon />
      </button>
    </div>
  );
};

interface ImageListItemProps {
  handleDelete: (key: string) => void;
  image: Image;
}
