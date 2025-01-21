"use client"; // 클라이언트 컴포넌트로 선언

import { useRecoilState } from "recoil";
import { currentStepState } from "@/state/atom";

export default function Timeline() {
  const [currentStep, setCurrentStep] = useRecoilState(currentStepState);

  const totalSteps = 5; // 총 단계 수
  const progressBarWidth = `${(currentStep / (totalSteps - 1)) * 100}%`;

  return (
    <div className="relative w-full h-2 bg-gray-200 rounded-full">
      <div
        className="absolute h-2 bg-blue-500 rounded-full"
        style={{ width: progressBarWidth }}
      ></div>
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          className={`absolute w-4 h-4 rounded-full -top-1 ${
            currentStep >= index ? "bg-blue-500" : "bg-gray-300"
          }`}
          style={{
            left: `${(index / (totalSteps - 1)) * 100}%`,
            transform: "translateX(-50%)",
          }}
        ></div>
      ))}
    </div>
  );
}
