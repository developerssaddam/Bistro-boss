import { Link } from "react-router-dom";
import MenuList from "../../../Sheard/MenuList/MenuList";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ViewBtn from "../../../components/ViewBtn/ViewBtn";
import useMenuCategoryData from "../../../hooks/useMenuCategoryData";

const PopularFood = () => {
  const popularFood = useMenuCategoryData("popular");

  return (
    <div>
      <SectionTitle title={"Popular Foods"} subtitle={"Check it out"} />

      <div className="max-w-5xl mb-14 mx-auto">
        <div className="item_container grid grid-cols-1 md:grid-cols-2 gap-8">
          {popularFood.map((item, index) => (
            <MenuList item={item} key={index} />
          ))}
        </div>
        <Link to="/menuitem">
          <ViewBtn btnText={"view all menu"} />
        </Link>
      </div>
    </div>
  );
};

export default PopularFood;
