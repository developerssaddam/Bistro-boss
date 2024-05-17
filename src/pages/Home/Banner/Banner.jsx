import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/home/01.jpg";
import bannerImg2 from "../../../assets/home/02.jpg";
import bannerImg3 from "../../../assets/home/03.png";
import bannerImg4 from "../../../assets/home/04.jpg";
import bannerImg5 from "../../../assets/home/05.png";
import bannerImg6 from "../../../assets/home/06.png";
import bannerImg7 from "../../../assets/home/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel autoPlay="true" infiniteLoop="true">
        <div>
          <img className="max-h-[700px] object-cover" src={bannerImg1} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img className="max-h-[700px] object-cover" src={bannerImg2} />
        </div>
        <div>
          <img className="max-h-[700px] object-cover" src={bannerImg3} />
        </div>
        <div>
          <img className="max-h-[700px] object-cover" src={bannerImg4} />
        </div>
        <div>
          <img className="max-h-[700px] object-cover" src={bannerImg5} />
        </div>
        <div>
          <img className="max-h-[700px] object-cover" src={bannerImg6} />
        </div>
        <div>
          <img className="max-h-[700px] object-cover" src={bannerImg7} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
