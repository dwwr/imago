import type { Image } from "../../../types";

export const ImageListItem: React.FC<ImageListItemProps> = ({ image }) => {
  return <img src={image.url} />;
};

interface ImageListItemProps {
  image: Image;
}
