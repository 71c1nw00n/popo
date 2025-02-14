// src/api/axios.js
import axios from "axios";

const baseAxios = axios.create({
  baseURL: "http://127.0.0.1:8000", // API의 기본 URL
  timeout: 5000,                      // 요청 시간 제한 (5초)
  headers: {
    "Content-Type": "application/json", // JSON 형식의 데이터 전송
  },
});

export default baseAxios;
