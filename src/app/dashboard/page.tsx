"use client";

import { userApi } from "@/api/service/user/api";
import { useGetUser } from "@/api/service/user/queries";
import { User } from "@/api/service/user/types";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const userData = await userApi.getUsers();
  //       setUser(userData);
  //     } catch (error) {
  //       console.error("유저 정보를 불러오는 데 실패했습니다.", error);
  //     }
  //   };

  //   fetchUser();
  //   console.log("user Info: ",user);
  // });
  const { data: userData } = useGetUser();
  const users = userData?.users;
  function userList(users: User[]) {
    return users?.map((user) => (
      <li key={user.id}>Id: {user.id}, Password: {user.password}</li>
    ));
    return;
  }
  console.log("user Info: ",users);
  return userData && (
    <div>
      <h1>Dashboard</h1>
      {userData && 
        <ul>{userList(users)}</ul>
      }
      {/* {user?.map((user) => (
        <p key={user.id}>{user.password}</p>
      ))} */}
    </div>
  );
};
export default DashboardPage;