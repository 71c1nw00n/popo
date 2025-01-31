"use client";

import React from "react";
import Header from "../../components/Header";
import Timeline from "../../components/Timeline";

export default function ListAwardPage() {
  return (
    <div className="flex flex-col w-full h-full">
				{/* Header */}
				<div className="text-[40px] text-black">
	        <p className="flex font-semibold">Step6. 기술 스택 입력</p>
	        <p className="flex">사용할 수 있는 기술을 입력해주세요</p>
				</div>

				{/* Form */}
				<div className="flex flex-col mt-10 gap-2 items-center justify-center">
					<div className="flex flex-col itmes-left justify-left">
						<p className="text-[40px] font-bold text-primary">Frontend</p>
						<input 
							className="w-[1080px] p-[12px_16px] rounded-[13px] text-[28px] border border-black" 
							type="text"
							placeholder="Frontend 기술을 입력해주세요"
						/>
					</div>
					<div className="flex flex-col itmes-left justify-left">
						<p className="text-[40px] font-bold text-primary">Backend</p>
						<input 
							className="w-[1080px] p-[12px_16px] rounded-[13px] text-[28px] border border-black" 
							type="text"
							placeholder="Backend 기술을 입력해주세요"
						/>
					</div>
					<div className="flex flex-col itmes-left justify-left">
						<p className="text-[40px] font-bold text-primary">Design</p>
						<input 
							className="w-[1080px] p-[12px_16px] rounded-[13px] text-[28px] border border-black" 
							type="text"
							placeholder="Design 기술을 입력해주세요"
						/>
					</div>
					<div className="flex flex-col itmes-left justify-left">
						<p className="text-[40px] font-bold text-primary">Else</p>
						<input 
							className="w-[1080px] p-[12px_16px] rounded-[13px] text-[28px] border border-black" 
							type="text"
							placeholder="기타 기술을 입력해주세요"
						/>
					</div>
				</div>
		</div>
  );
}