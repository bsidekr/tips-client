"use client";

import { useState } from "react";

export default function FheRunOutput({ userId = "" }) {
  const [result, setResult] = useState("0.00s");

  const onClickRun = async () => {
    const response = await fetch("/api/run_fhe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
      }),
    });
    const { data } = await response.json();
    setResult(data);
  };

  return (
    <div className="col my-2 gap-2">
      <button onClick={onClickRun}>Run the model</button>

      <label htmlFor="executionTime">Total FHE Execution Time:</label>
      <input
        readOnly
        id="executionTime"
        type="text"
        value={`${result} seconds`}
        className="flex-1"
      />
    </div>
  );
}
