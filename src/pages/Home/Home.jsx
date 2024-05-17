import About from "./About/About";
import Banner from "./Banner/Banner";
import CallSection from "./CallSection/CallSection";
import ChefRecommend from "./ChefRecommend/ChefRecommend";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import FoodCategory from "./FoodCategory/FoodCategory";
import ManuList from "./MenuList/ManuList";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <FoodCategory />
      <About />
      <ManuList />
      <CallSection />
      <ChefRecommend />
      <FeaturedSection />
      <Testimonial />
    </div>
  );
};

export default Home;
