import ExplainText from "./ui/explainText";
import Spacer from "./ui/spacer";

export default function Overview() {
  return (
    <>
      <h1>Overview</h1>
      <Spacer />

      <h2>배경</h2>
      <ExplainText>
        주주명부 데이터는 민감한 정보를 포함합니다. 주로 캠페인 정보, 주주의
        이름, 주소, 주식수를 포함하기 때문에, 캠페인 기간이
        끝나면 폐기하는 것을 원칙으로 합니다. 이 정보를 습득하게 된다면 개인이
        어떤 주식을 소유하며, 수량은 어느 정도이고, 거주지는 어디인지까지에 대한
        모든 정보가 유출될 수 있습니다.
      </ExplainText>
      <ExplainText>
        역으로 위 단점을 극복한다면 캠페인 기간 이후에도 내부 리소스로 활용할 수
        있습니다. 프로덕트의 장점으로 녹여낼 수 있게 됩니다.
      </ExplainText>
      <ExplainText>
        일반적인 암호화와 달리, 동형암호 기술을 통해 암호화된 정보는 복잡한
        연산을 거쳐도, 결과가 보존됩니다. 따라서 암호화된 상태에서 연산을 할 수
        있어 높은 보안성을 유지할 수 있습니다.
      </ExplainText>

      <h2>목적</h2>
      <ExplainText>
        보안성을 유지한 채로 AI 연구를 진행하는 것을 확인하고자 합니다.
      </ExplainText>
      
      <h2>가설</h2>
      <ExplainText>
        위임 데이터를 정제해 기존에 위임한 주주, 안건 특성을 반영하는
        칼럼을 산출할 수 있다.
      </ExplainText>
      <ExplainText>
        이를 바탕으로 주주 및 캠페인의 특성을 통해 전자위임 진행 가능성을 도출할 수 있다.
      </ExplainText>
      <ExplainText>
        주주 정보, 캠페인 정보를 넣었을 때 전자위임 가능성을 예측할 수 있는 모델을 만들
        수 있다.
      </ExplainText>
      <ExplainText>
        암호화된 데이터와 평문 데이터는 동일한 결괏값을 도출한다.
      </ExplainText>
    </>
  );
}
