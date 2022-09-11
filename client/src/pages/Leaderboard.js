const Leaderboard = () => {
  return (
    <div className="screenMargin grid gap-3">
      <div className="leaderTitle">Leaderboard</div>
      <div className="rivalCard">
        <div className="rivalAddress">
          <span className="text-3xl">#1🚲</span>{" "}
          0xdA7773E91a396d592AD33146164dA6d7d2Fda9B6
        </div>
        <div className="rivalStats">
          <div>1 rides</div>
          <div>+1700⚡</div>
          <div>1.7km</div>
        </div>
      </div>
    </div>
  );
}
export default Leaderboard;
