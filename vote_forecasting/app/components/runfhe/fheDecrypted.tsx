"use client";

import { useState } from "react";
import { IPlainInput } from "../value";

export default function FheDecrypted({
  userId = "",
  data,
}: {
  userId: string;
  data: IPlainInput;
}) {
  const [result, setResult] = useState({
    plain: "plain",
    encrypted: "encrypted",
  });

  const onClickDecrypt = async () => {
    const response = await fetch("/api/decrypt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        plain_input: [[+data.user_id, +data.shares_num, +data.year]],
      }),
    });

    const { data: result } = await response.json();
    setResult({
      plain: result.proba,
      encrypted: result.proba_fhe,
    });
  };

  return (
    <div className="col gap-2 my-2">
      <button onClick={onClickDecrypt}>Decrypt the output</button>
      <div className="half">
        <input
          readOnly
          name="plain"
          type="text"
          value={result.plain}
          className="flex-1"
        />
        <input
          readOnly
          name="encrypted"
          type="text"
          value={result.encrypted}
          className="flex-1"
        />
      </div>
    </div>
  );
}
