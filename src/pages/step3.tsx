import React, { useState } from "react";

const Step3 = () => {
  // 상태 관리: 선택된 옵션
  const [selectedOption, setSelectedOption] = useState(null);
  // 옵션 데이터
  const options = ["회사 인턴", "연구 인턴"]; // 원하는 옵션 추가 가능

  return (
    <div className="relative w-full h-auto bg-white overflow-hidden p-4 sm:p-6 md:p-12">

      {/* 제목 및 설명 */}
      <div className="text-left mt-6">
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
          Step 3. 인턴/연구 경험 추가
        </p>
        <p className="text-md sm:text-l md:text-xl font-light mt-2">
          인턴 또는 연구 경력을 설명해주세요.
        </p>
      </div>

      {/* 입력 폼 컨테이너 */}
      <div className="mt-8 p-6 rounded-lg bg-gray-100">
        {/* 경력 1 */}
        <div>
          <p className="text-xl sm:text-2xl font-bold text-blue-700">경력 1</p>
          <p className="text-lg sm:text-xl font-bold mt-4 text-black">
            근무한 회사/연구실의 이름은 무엇인가요?
          </p>
          <div className="flex flex-col gap-4 mt-4">
{/* 선택형 입력과 입력 필드 */}
<div className="flex flex-col sm:flex-row sm:items-center gap-4 ">
  {/* 드롭다운 박스 */}
  <select
    id="experienceType"
    value={selectedOption}
    onChange={(e) => setSelectedOption(e.target.value)} // 선택된 옵션 업데이트
    className="w-40 lg:w-40 sm:w-1/3 p-3 rounded-md border border-gray-400 bg-white text-gray-800"
  >
    <option value="" disabled>
      경험 유형을 선택하세요
    </option>
    <option value="회사 인턴">회사 인턴</option>
    <option value="연구실 경험">연구실 경험</option>
  </select>

  {/* 입력 필드 */}
  {selectedOption && (
    <input
      type="text"
      placeholder={`ex. Ki Lab (KAIST)`}
      className="flex-1 p-3 rounded-md border border-gray-400"
    />
  )}
</div>

    </div>
        </div>

        {/* 근무 기간 */}
        <div className="mt-6">
          <p className="text-lg sm:text-xl font-bold text-black">
            근무 기간을 선택해주세요
          </p>
          <p className="mt-2 text-lg">2023.08 ~ 2024.02</p>
        </div>

        {/* 맡은 업무 */}
        <div className="mt-6">
          <p className="text-lg sm:text-xl font-bold text-black">
            해당 회사/연구실에서는 어떤 일을 맡았나요?
          </p>
          <textarea
            placeholder="회사/연구실에서 맡았던 역할과 했던 일을 설명해주세요."
            className="w-full mt-2 p-3 rounded-md border border-gray-400"
          ></textarea>
        </div>

        {/* 성과 */}
        <div className="mt-6">
          <p className="text-lg sm:text-xl font-bold text-black">
            해당 회사/연구실에서 어떤 성과를 만들었나요?
          </p>
          <textarea
            placeholder="해당 직무를 통해 이루어낸 성과나 새롭게 배운 점을 자세히 설명해주세요."
            className="w-full mt-2 p-3 rounded-md border border-gray-400"
          ></textarea>
        </div>
      </div>

      {/* SVG Bar */}
      <svg
        width={1219}
        height={58}
        viewBox="0 0 1219 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto w-4/9 max-w-[800px] h-auto  mt-4"
        preserveAspectRatio="none"
      >
        <rect x={29} y={20} width={1163} height={17} fill="#D9D9D9" />
        <circle cx={29} cy={29} r={29} fill="#B9C9FF" />
        <circle cx={261} cy={29} r={29} fill="#D9D9D9" />
        <ellipse cx="493.5" cy={29} rx="29.5" ry={29} fill="#D9D9D9" />
        <circle cx={726} cy={29} r={29} fill="#D9D9D9" />
        <circle cx={958} cy={29} r={29} fill="#D9D9D9" />
        <circle cx={1190} cy={29} r={29} fill="#D9D9D9" />
      </svg>
    </div>
  );
};

export default Step3;
