import About from "./About/About";
import Banner from "./Banner/Banner";
import CallSection from "./CallSection/CallSection";
import ChefRecommend from "./ChefRecommend/ChefRecommend";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import FoodCategory from "./FoodCategory/FoodCategory";
import PopularFood from "./PopularFood/PopularFood";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <FoodCategory />
      <About />
      <PopularFood />
      <CallSection />
      <ChefRecommend />
      <FeaturedSection />
      <Testimonial />
    </div>
  );
};

export default Home;
