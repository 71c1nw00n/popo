import baseAxios from "@/api/axios";
import { AxiosError } from "axios";
import { Portfolio, Profile, User } from "./types";

export const userApi = {
  postUsers: async (userData: User) => {
    try {
      const response = await baseAxios.post(`/users`, userData);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Error posting user:", error.response?.data || error.message);
      } else {
        console.error("Unexpected error:", error);
      }
      throw error;
    }
  },

  postPortfolio: async (Data: Portfolio) => {
    try {
      const response = await baseAxios.post(`/portfolio`, Data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Error posting user:", error.response?.data || error.message);
      } else {
        console.error("Unexpected error:", error);
      }
      throw error;
    }
  },

  postProfile: async (portfolioId:number, Data:Profile) => {
    try {
      const response = await baseAxios.post(`/portfolio/${portfolioId}`, Data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Error posting user:", error.response?.data || error.message);
      } else {
        console.error("Unexpected error:", error);
      }
      throw error;
    }
  },
  
  getUsers: async (): Promise<User[]> => {
    try {const response = await baseAxios.get(`/users`);
    return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Error getting users:", error.response?.data || error.message);
      } else {
        console.error("Unexpected error:", error);
      }
      throw error;
    }
  },
};

