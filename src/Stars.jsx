export default function Stars({ n }) {
  return (
    <span style={{ letterSpacing: "2px", fontSize: "11px" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} style={{ color: i <= Math.floor(n) ? "#fbbf24" : "#374151" }}>
          ★
        </span>
      ))}
    </span>
  );
}