export default function Spacer({ h = 1 }) {
  return <div className={`h-${4 * h} md:h-${8 * h}`} />;
}
