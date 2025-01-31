import { atom } from "recoil";

export const currentStepState = atom({
  key: "currentStepState", // Atom의 고유한 식별자
  default: 1, // 초기 값
});
