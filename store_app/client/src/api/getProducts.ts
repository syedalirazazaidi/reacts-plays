import { ProductsType } from "./../types/interface";
import axios from "axios";
import { API_URL } from "./config";

export const getProducts = async () => {
  const response: ProductsType = await axios.get(`${API_URL}`);
  return response;
};
