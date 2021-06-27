import axios from 'axios';
import config from "@/config/config";

const token = localStorage.getItem('token')

export const api = axios.create({
  baseURL: config.server.url,
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});