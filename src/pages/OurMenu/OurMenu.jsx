import PageBanner from "../../Sheard/PageBanner/PageBanner";
import menuPageBannerImg from "../../assets/menu/banner.jpg";
import Desserts from "./Desserts/Desserts";
import Pizza from "./Pizza/Pizza";
import Salads from "./Salads/Salads";
import Soup from "./Soup/Soup";
import TodaysOfferMenu from "./TodayOfferMenu/TodaysOfferMenu";

const OurMenu = () => {
  return (
    <div>
      <PageBanner
        img={menuPageBannerImg}
        title={"OUR MENU"}
        subtitle={"Would you like to try a dish?"}
      />

      <TodaysOfferMenu />
      <Desserts />
      <Pizza />
      <Salads />
      <Soup />
    </div>
  );
};

export default OurMenu;
