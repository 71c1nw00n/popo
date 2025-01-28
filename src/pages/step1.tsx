import React, { useState } from "react";
import { useRouter } from 'next/router';

const Step1 = () => {
  const router = useRouter();
  // 상태 관리: 선택된 버튼들
  const [selectedTraits, setSelectedTraits] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [selectedFields, setSelectedFields] = useState([]);

  // 선택/해제 토글 함수
  const toggleSelection = (item, setFunction, currentState, maxItems) => {
    if (currentState.includes(item)) {
      setFunction(currentState.filter((i) => i !== item)); // 선택 해제
    } else if (currentState.length < maxItems) {
      setFunction([...currentState, item]); // 선택 추가
    }
  };

  const handleNext = () => {
    if (selectedTraits.length === 0 || 
        selectedStyles.length === 0 || 
        selectedFields.length === 0) {
      alert("모든 항목의 키워드를 선택해주세요.");
      return;
    }
    router.push('/step2'); // 다음 페이지 경로로 수정해주세요
  };

  return (
    <div className="relative w-full h-auto bg-white overflow-hidden">
      {/* header */}
      <header className="bg-[#FFFFFF] text-white py-4 shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* 로고 */}
          <div className="text-3xl font-bold text-[#2300A1]">POPO</div>

          {/* 네비게이션 메뉴 */}
          <nav className="flex space-x-6">
            <button 
              onClick={handleNext}
              className="hover:text-gray-300 font-bold text-[#2300A1] text-xl"
            >
              다음
            </button>
          </nav>
        </div>
      </header>

      {/* 콘텐츠 */}
      <div className="px-10 pt-20"> {/* 헤더 높이만큼 패딩 추가 */}
        {/* Step Description */}
        <div className="px-4 py-4 sm:px-6 md:px-12">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
            Step 1. 자기소개 작성
          </p>
          <p className="text-base sm:text-lg lg:text-xl font-light mt-2">
            나를 설명할 수 있는 키워드를 골라주세요
          </p>
        </div>
        {/* 성격 */}
        <div className="px-4 py-5 sm:px-6 md:px-12">
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[#2300A1]">
            성격 (최대 2개)
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["쾌활한", "신중한", "꼼꼼한", "성실한", "친근한", "진취적인", "긍정적인", "창의적인", "주체적인", "열정적인"].map((trait) => (
              <button
                key={trait}
                onClick={() => toggleSelection(trait, setSelectedTraits, selectedTraits, 2)}
                className={`px-4 py-2 rounded-md text-lg font-medium transition-colors ${
                  selectedTraits.includes(trait)
                    ? "bg-[#8588D2] text-white"
                    : "bg-[#F0F0F0] text-black"
                }`}
              >
                {trait}
              </button>
            ))}
          </div>
        </div>
                {/* 관심 개발 분야 */}
                <div className="px-4 py-5 sm:px-6 md:px-12">
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[#2300A1] ">
              관심 개발 분야 (최대 3개)
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
          {["front end", "back end", "웹 개발", "앱 개발", "게임 개발", "Computer Vision", "LLM"].map(
            (field) => (
              <button
                key={field}
                onClick={() => toggleSelection(field, setSelectedFields, selectedFields, 3)}
                className={`px-4 py-2 rounded-md text-lg font-medium transition-colors ${
                  selectedFields.includes(field)
                    ? "bg-[#8588D2] text-white"
                    : "bg-[#F0F0F0] text-black"
                }`}
          >
            {field}
          </button>
        )
      )}
          </div>

          </div>
        {/* 일하는 스타일 */}
        <div className="px-4 py-5 sm:px-6 md:px-12">
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[#2300A1]">
            일하는 스타일 (최대 3개)
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              "새로운 도전을 즐기는",
              "새로운 기술을 배우는 것을 좋아하는",
              "논리적이고 분석적으로 행동하는",
              "주도적으로 일하는 것을 좋아하는",
              "꾸준함과 성실함을 중시하는",
              "아이디어가 풍부한",
              "다양한 사람들을 만나는 것을 즐기는",
              "맡은 일에 책임감을 가지는",
              "다양한 관점을 수용하고 조화롭게 일하는",
            ].map((style) => (
              <button
                key={style}
                onClick={() => toggleSelection(style, setSelectedStyles, selectedStyles, 3)}
                className={`px-4 py-2 rounded-md text-lg font-medium transition-colors ${
                  selectedStyles.includes(style)
                    ? "bg-[#8588D2] text-white"
                    : "bg-[#F0F0F0] text-black"
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>  


      {/* SVG Bar */}
      <svg
        width={1219}
        height={58}
        viewBox="0 0 1219 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto w-4/9 max-w-[800px] h-auto py-12 "
        preserveAspectRatio="none"
      >
        <rect x={29} y={20} width={1163} height={17} fill="#D9D9D9" />
        <circle cx={29} cy={29} r={29} fill="#CECFED" />
        <circle cx={261} cy={29} r={29} fill="#D9D9D9" />
        <ellipse cx="493.5" cy={29} rx="29.5" ry={29} fill="#D9D9D9" />
        <circle cx={726} cy={29} r={29} fill="#D9D9D9" />
        <circle cx={958} cy={29} r={29} fill="#D9D9D9" />
        <circle cx={1190} cy={29} r={29} fill="#D9D9D9" />
      </svg>
      
    </div>
    </div>
  );
};

export default Step1;

