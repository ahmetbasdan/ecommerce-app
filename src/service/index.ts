import axios from "axios";
import { productsResponse } from "../types/service";

const productsService = () => axios.get<productsResponse[]>('https://fakestoreapi.com/products');

export default {
    productsService
}