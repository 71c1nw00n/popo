import React from "react";
import Header from "../../components/Header";

export default function CreateProfilePage() {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Container */}
      <div className="w-full h-full">
            
        <p className="text-[40px] font-semibold">Step 2. 프로필 형성</p>
        <p className="text-[40px] text-gray-600">필요한 정보를 입력해주세요</p>

        {/* Profile Banner */}
        <div className="relative mt-6 w-[80%] mx-auto items-center bg-lightgray rounded-lg h-32 flex items-center justify-center">
          <span className="text-darkgray text-[28px]">배너 사진</span>
          <button className="absolute bottom-2 right-2 bg-white px-4 py-1 text-[28px] font-medium !text-red rounded-full shadow-md hover:bg-gray-100">
            업로드
          </button>
        </div>

        {/* Form */}
        <form className="mt-6 mx-[200px] min-w-[600px] w-[70%] mx-auto">
          {/* Name */}
          <div>
            <label className="block text-[28px] font-medium text-black">이름</label>
            <input
              type="text"
              className="text-[24px] p-[6px_10px] block w-full border border-darkgray rounded-md shadow-sm focus:border-primary focus:ring focus:ring-tertiary"
              placeholder="이름을 입력하세요"
            />
          </div>
          <div className="grid grid-cols-2 gap-x-[60px] gap-y-4">


            {/* Email */}
            <div>
              <label className="block text-[28px] font-medium text-black">메일</label>
              <input
                type="email"
                className="text-[24px] p-[6px_10px] block w-full border border-darkgray rounded-md shadow-sm focus:border-primary focus:ring focus:ring-tertiary"
                placeholder="jh532565@kaist.ac.kr"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[28px] font-medium text-black">휴대전화</label>
              <input
                type="text"
                className="text-[24px] p-[6px_10px] block w-full border border-darkgray rounded-md shadow-sm focus:border-primary focus:ring focus:ring-tertiary"
                placeholder="전화번호를 입력하세요"
              />
            </div>

            {/* Major */}
            <div>
              <label className="block text-[28px] font-medium text-black">전공</label>
              <input
                type="text"
                className="text-[24px] p-[6px_10px] block w-full border border-darkgray rounded-md shadow-sm focus:border-primary focus:ring focus:ring-tertiary"
                placeholder="전공을 입력하세요"
              />
            </div>

            {/* School Name */}
            <div>
              <label className="block text-[28px] font-medium text-black">학교명</label>
              <input
                type="text"
                className="text-[24px] p-[6px_10px] block w-full border border-darkgray rounded-md shadow-sm focus:border-primary focus:ring focus:ring-tertiary"
                placeholder="학교명을 입력하세요"
              />
            </div>

            {/* Enrollment Period */}
            <div className="col-span-1">
              <label className="block text-[28px] font-medium text-black">재학기간</label>
              <div className="flex space-x-4">
                <input
                  type="date"
                  className="text-[24px] p-[6px_10px] block w-full border border-darkgray rounded-md shadow-sm focus:border-primary focus:ring focus:ring-tertiary"
                />
                <input
                  type="date"
                  className="text-[24px] p-[6px_10px] block w-full border border-darkgray rounded-md shadow-sm focus:border-primary focus:ring focus:ring-tertiary"
                />
              </div>
            </div>

            {/* GitHub or Blog */}
            <div>
              <label className="block text-[28px] font-medium text-black">GitHub / 기술블로그</label>
              <input
                type="text"
                className="text-[24px] p-[6px_10px] block w-full border border-darkgray rounded-md shadow-sm focus:border-primary focus:ring focus:ring-tertiary"
                placeholder="GitHub 또는 블로그 URL을 입력하세요"
              />
            </div>


            
          </div>
        </form>
      </div>
    </div>
  );
}