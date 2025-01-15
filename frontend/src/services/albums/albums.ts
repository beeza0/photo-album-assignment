import axios from "axios";
import { Album } from "../../types/albums.types";

const API_URL = "http://localhost:8000/album";

export const getAlbumsByUserId = async (userId: string | number) => {
  const { data }: { data: Album[] } = await axios.get(`${API_URL}/${userId}`);
  return data;
};
