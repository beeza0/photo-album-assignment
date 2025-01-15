import axios from "axios";
import { Photo } from "../../types/photos.types";

const API_URL = "http://localhost:8000/photo";

export const getPhotosByAlbumId = async (albumId: string) => {
  const { data }: { data: Photo[] } = await axios.get(`${API_URL}/${albumId}`);
  return data;
};

export const createPhoto = async (
  title: string,
  url: string,
  albumId: string
) => {
  const { data }: { data: Photo } = await axios.post(`${API_URL}/create`, {
    title,
    url,
    albumId,
  });
  return data;
};
