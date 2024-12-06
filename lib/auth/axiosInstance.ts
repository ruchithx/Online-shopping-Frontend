import axios from 'axios';
import { getSession } from 'next-auth/react';

// Extend the Session type to include accessToken
declare module 'next-auth' {
  interface Session {
    accessToken?: string;
  }
}

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Replace with your API base URL
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    console.log(session?.accessToken);
    if (session?.accessToken) {
      config.headers.Authorization = `Bearer ${session.accessToken}`; // Attach the access token
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
