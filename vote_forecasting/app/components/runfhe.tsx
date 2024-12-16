"use client";

import { useState } from "react";

import FheDecrypted from "./runfhe/fheDecrypted";
import FheEncrypt from "./runfhe/fheEncrypt";
import FheKeygen from "./runfhe/fheKeygen";
import FheRunOutput from "./runfhe/fheRunOutput";
import ExplainText from "./ui/explainText";
import { defaultInput } from "./value";

// main reference
// https://huggingface.co/spaces/zama-fhe/encrypted_health_prediction

export default function RunFHE() {
  const [result, setResult] = useState({
    userId: "userId",
    evaluationKey: "evaluationKey",
  });
  const [data, setData] = useState(defaultInput);

  const onClickKeygen = async () => {
    const response = await fetch("/api/keygen");
    const { data } = await response.json();
    setResult({
      userId: data.user_id,
      evaluationKey: data.serialized_evaluation_keys_shorten_hex,
    });
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h1>Run</h1>
      <ExplainText>
        동형암호 기술을 사용한 시연 가능한 웹사이트 형태의 MVP 도출
      </ExplainText>
      <Spacer />

      <h3>1. Generating Your Keys: Starting the Encryption Journey</h3>
      <FheKeygen result={result} onClickKeygen={onClickKeygen} />
      <Spacer />

      <h3>
        2. Input Your Data: Begin the Prediction Process & 3. Data Encryption:
        Securing Your Privacy
      </h3>
      <FheEncrypt
        userId={result.userId}
        data={data}
        onChangeInput={onChangeInput}
      />
      <Spacer />

      <h3>3. Receive the Output</h3>
      <FheRunOutput userId={result.userId} />
      <Spacer />

      <h3>4. Decrypt and Explain Results: Plain vs. Encrypted</h3>
      <FheDecrypted userId={result.userId} data={data} />
      <Spacer />
    </>
  );
}

const Spacer = () => <div className="h-8 md:h-8" />;