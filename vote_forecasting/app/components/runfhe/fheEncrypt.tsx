"use client";

import { useState } from "react";

import DataInput from "../dataInput";
import { IPlainInput } from "../value";

interface IFheEncryptProps {
  userId: string;
  data: IPlainInput;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FheEncrypt({
  userId = "",
  data,
  onChangeInput,
}: IFheEncryptProps) {
  const [result, setResult] = useState({
    encrypted: "encrypted",
    plain: "plain",
  });

  const onClickEncode = async () => {
    const response = await fetch("/api/encrypt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: userId,
            plain_input: [+data.user_id, +data.shares_num, +data.year],
          }),
        });
    const { data: result } = await response.json();
    setResult({
      plain: result.plain.toString(),
      encrypted: result.encrypted.toString(),
    });
  };

  return (
    <div className="col gap-2 my-2">
      데이터 입력 및 전처리 (Data Input & Pre processing)
      {/* - 입력 데이터의 출처와 형식 - 데이터 클린징 및 전처리 단계 - 동형암호화 기법 설명 */}
      <DataInput data={data} onChangeInput={onChangeInput} />
      <button onClick={onClickEncode}>
        Encode, quantize and encrypt the text
      </button>
      <li className="col">
        <label htmlFor="plain">plain</label>
        <input readOnly id="plain" type="text" value={result.plain} />
      </li>
      <li className="col">
        <label htmlFor="encrypted">encrypted</label>
        <input readOnly id="encrypted" type="text" value={result.encrypted} />
      </li>
    </div>
  );
}
