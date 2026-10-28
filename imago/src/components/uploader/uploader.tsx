export const Uploader: React.FC<UploaderProps> = ({ onFileUpload }) => {
  return (
    <input
      type="file"
      id="avatar"
      name="avatar"
      accept="image/*"
      onChange={onFileUpload}
    />
  );
};

interface UploaderProps {
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
