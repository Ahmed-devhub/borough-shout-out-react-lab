
function BoroughCard({ borough = "Queens", bgColor }) {
  const emojiMap = {
    Brooklyn: "🌉",
    Manhattan: "🏙️",
    Queens: "👑",
    Bronx: "🐿️",
    "Staten Island": "🛳️",
  };

  return (
    <div style={{ backgroundColor: bgColor || "#eee", padding: "1rem", borderRadius: "8px", margin: "1rem" }}>
      <h2>
        Hello from {borough}! {emojiMap[borough] || "🗽"}
      </h2>
    </div>
  );
}

export default BoroughCard;
