export default function FheKeygen({
  result,
  onClickKeygen,
}: {
  result: { userId: string; evaluationKey: string };
  onClickKeygen: () => void;
}) {
  return (
    <div className="col my-2 gap-2">
      <button onClick={onClickKeygen}>Generate the key</button>

      <div className="col">
        <label htmlFor="userId" className="font-medium">
          random generated user_id for keygen
        </label>
        <input
          readOnly
          id="userId"
          type="text"
          value={result.userId}
          className="flex-1"
        />
      </div>
      <div className="col">
        <label htmlFor="evaluationKey" className="font-medium">
          evaluationKey
        </label>
        <input
          readOnly
          id="evaluationKey"
          type="text"
          value={result.evaluationKey}
          className="flex-1"
        />
      </div>
    </div>
  );
}
