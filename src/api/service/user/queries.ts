import { useQuery } from "@tanstack/react-query";
import baseAxios from "@/api/axios";
import { User } from "./types";


export const useGetUser = () => {
  return useQuery({
    queryKey: ["getUser"],  // 캐싱을 위한 고유 키
    queryFn: async (): Promise<User[]> => {
      const response = await baseAxios.get<User[]>(`/users`);
      return response.data;
    },
    // enabled: !!userId,  // userId가 있을 때만 실행
  });
};
