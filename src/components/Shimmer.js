export const ShimmerCard = () => {
  return <div className="h-44 w-40 rounded m-3 bg-gray-200"></div>;
};

export default Shimmer = () => {
  return (
    <div className="shimmer-container grid grid-cols-6 gap-3">
      {Array(9)
        .fill("")
        .map((data, index) => {
          return <ShimmerCard key={index} />;
        })}
    </div>
  );
};
