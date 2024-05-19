import MenuList from "../../../Sheard/MenuList/MenuList";
import SectionBanner from "../../../Sheard/SectionBanner/SectionBanner";
import ViewBtn from "../../../components/ViewBtn/ViewBtn";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import useMenuCategoryData from "../../../hooks/useMenuCategoryData";
import { Link } from "react-router-dom";

const Pizza = () => {
  const pizzaMenu = useMenuCategoryData("pizza");

  return (
    <div>
      <SectionBanner
        img={pizzaBg}
        title={"pizza"}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />

      <div className="max-w-5xl mb-14 mx-auto">
        <div className="item_container grid grid-cols-1 md:grid-cols-2 gap-8">
          {pizzaMenu.map((item, index) => (
            <MenuList item={item} key={index} />
          ))}
        </div>
        <Link to="/shop/pizza">
          <ViewBtn btnText={"ORDER YOUR FAVOURITE FOOD"} />
        </Link>
      </div>
    </div>
  );
};

export default Pizza;
