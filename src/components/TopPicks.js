import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CDN_LINK } from "../../utils/constant";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const TopPick = ({ topPickData }) => {
  return (
    <Carousel
      responsive={responsive}
      showDots={true}
      autoPlay={true}
      autoPlaySpeed={1000}
    >
      {topPickData.map((data) => {
        return (
          <div key={data.bannerId} className="top-pick-card mr-4">
            <img className="h-50" src={CDN_LINK + data.creativeId} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default TopPick;
