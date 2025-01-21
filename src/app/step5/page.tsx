'use client';

import React from "react";
import { useState } from 'react';
import Header from "../../components/Header";

export default function Step5Page() {
  const [rows, setRows] = useState<string[][]>([]);
  // 행 추가 함수
  const addRow = () => {
    setRows((prevRows) => [
      ...prevRows,
      { date: '', event: '', host: '', details: '' }, // 빈 행 추가
    ]);
  };

  // 행 데이터 업데이트 함수
  const updateCell = (rowIndex: number, colIndex: number, value: string) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex][colIndex] = value;
    setRows(updatedRows);
  };

  return (
    <div className="flex flex-col w-full h-full">
    	<div className="text-[40px] text-black">
        <p className="flex font-semibold">Step6. 기술 스택 입력</p>
        <p className="flex">사용할 수 있는 기술을 입력해주세요</p>
			</div>

			<div className="flex flex-col w-full h-full mt-10 gap-4 items-center">
		    <div className="flex flex-col items-center">
		      <table className="w-full border-separate border-spacing-0 rounded-xl border border-darkgray">
		        <thead className="bg-secondary text-white">
		          <tr className="bg-secondary text-[32px] text-white">
		            <th className="p-3 first:rounded-tl-xl last:rounded-tr-xl">수상 일자</th>
		            <th className="p-3">대회명</th>
		            <th className="p-3">주최처</th>
		            <th className="p-3 ">수상 내역</th>
		          </tr>
		        </thead>
		        <tbody>
		          {rows.map((row, index) => (
		            <tr key={index} className="text-[32px] ">
		              <td className="border-t border-r border-darkgray p-0">
		                <input
		                  type="date"
		                  value={row.date}
		                  onChange={(e) => updateCell(index, 'date', e.target.value)}
		                  className="w-full px-2 py-2 text-center"
		                />
		              </td>
		              <td className="border-t border-r border-darkgray p-0">
		                <input
		                  type="text"
		                  value={row.event}
		                  onChange={(e) => updateCell(index, 'event', e.target.value)}
		                  className="w-full px-2 py-2 text-center"
		                />
		              </td>
		              <td className="border-t border-r border-darkgray p-0">
		                <input
		                  type="text"
		                  value={row.host}
		                  onChange={(e) => updateCell(index, 'host', e.target.value)}
		                  className="w-full px-2 py-2 text-center"
		                />
		              </td>
		              <td className="border-t border-darkgray p-0">
		                <input
		                  type="text"
		                  value={row.details}
		                  onChange={(e) => updateCell(index, 'details', e.target.value)}
		                  className="w-full px-2 py-2 text-center"
		                />
		              </td>
		            </tr>
		          ))}
		        </tbody>
		      </table>

		      <div className="flex w-full justify-center mt-4">
		        <button
		          onClick={addRow}
		          className="flex w-full items-center justify-center h-10 bg-lightgray text-primary text-[28px] rounded-xl hover:bg-tertiary"
		        >
		          +
		        </button>
		      </div>
		    </div>
			</div>
    </div>
  );
}

