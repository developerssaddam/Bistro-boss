import { Link } from "react-router-dom";
import MenuList from "../../../Sheard/MenuList/MenuList";
import SectionBanner from "../../../Sheard/SectionBanner/SectionBanner";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import ViewBtn from "../../../components/ViewBtn/ViewBtn";
import useMenuCategoryData from "../../../hooks/useMenuCategoryData";

const Desserts = () => {
  const dessertsMenu = useMenuCategoryData("dessert");

  return (
    <div>
      <SectionBanner
        img={dessertBg}
        title={"desserts"}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />

      <div className="max-w-5xl mb-14 mx-auto">
        <div className="item_container grid grid-cols-1 md:grid-cols-2 gap-8">
          {dessertsMenu.map((item, index) => (
            <MenuList item={item} key={index} />
          ))}
        </div>
        <Link to="/shop/dessert">
          <ViewBtn btnText={"ORDER YOUR FAVOURITE FOOD"} />
        </Link>
      </div>
    </div>
  );
};

export default Desserts;
