export interface Image {
  lastModified: number;
  name: string;
  size: number;
  type: string;
  url?: string;
}

export type ImageCollection = Image[];

export interface ImageDatabase {
  [key: string]: Image;
}
