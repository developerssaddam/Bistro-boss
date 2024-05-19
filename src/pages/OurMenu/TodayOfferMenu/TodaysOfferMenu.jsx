import { Link } from "react-router-dom";
import MenuList from "../../../Sheard/MenuList/MenuList";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ViewBtn from "../../../components/ViewBtn/ViewBtn";
import useMenuCategoryData from "../../../hooks/useMenuCategoryData";

const TodaysOfferMenu = () => {
  const offerFoods = useMenuCategoryData("offered");

  return (
    <div>
      <SectionTitle title={"TODAY`S OFFER"} subtitle={"Don`t miss"} />
      <div className="max-w-5xl mb-14 mx-auto">
        <div className="item_container grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerFoods.map((item, index) => (
            <MenuList item={item} key={index} />
          ))}
        </div>
        <Link to='/shop/offered'>
          <ViewBtn btnText={"ORDER YOUR FAVOURITE FOOD"} />
        </Link>
      </div>
    </div>
  );
};

export default TodaysOfferMenu;
