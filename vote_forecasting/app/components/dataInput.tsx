import { IPlainInput } from "./value";

export default function DataInput({
  data,
  onChangeInput,
}: {
  data: IPlainInput;
  onChangeInput: (e: any) => void;
}) {
  return (
    <ul className="data-input">
      <li>
        <label htmlFor="user_id">캠페인 코드</label>
        <input
          type="text"
          name={"user_id"}
          id={"user_id"}
          value={data["user_id"]}
          onChange={onChangeInput}
        />
      </li>
      <li>
        <label htmlFor="shares_num">주식수</label>
        <input
          type="text"
          name={"shares_num"}
          id={"shares_num"}
          value={data["shares_num"]}
          onChange={onChangeInput}
        />
      </li>
      <li>
        <label htmlFor="year">캠페인 년도</label>
        <input
          type="text"
          name={"year"}
          id={"year"}
          value={data["year"]}
          onChange={onChangeInput}
        />
      </li>
    </ul>
  );
}
