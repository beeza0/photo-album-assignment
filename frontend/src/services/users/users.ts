import axios from "axios";
import { User } from "../../types/users.types";

const API_URL = "http://localhost:8000/user"; //use .env

export const getUsers = async () => {
  const { data }: { data: User[] } = await axios.get(API_URL);
  return data;
};

export const login = async (username: string) => {
  const { data }: { data: User | string } = await axios.post(
    `${API_URL}/login`,
    {
      username,
    }
  );
  return data;
};

export const signup = async (username: string, email: string) => {
  const { data }: { data: User | string } = await axios.post(
    `${API_URL}/create`,
    {
      username,
      email,
    }
  );
  return data;
};
