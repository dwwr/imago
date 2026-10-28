import styles from "./Uploader.module.css";

export const Uploader: React.FC<UploaderProps> = ({ onFileUpload }) => {
  return (
    <label className={styles.dropZone}>
      Click to upload
      <input
        className={styles.fileInput}
        type="file"
        id="file-input"
        accept="image/*"
        name="file-input"
        onChange={onFileUpload}
      />
    </label>
  );
};

interface UploaderProps {
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
