export const ShimmerCard = () => {
  return <div className="shimmer-card"></div>;
};

export default Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(9)
        .fill("")
        .map((data, index) => {
          return <ShimmerCard key={index} />;
        })}
    </div>
  );
};
