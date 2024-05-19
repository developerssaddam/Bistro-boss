import { Link } from "react-router-dom";
import MenuList from "../../../Sheard/MenuList/MenuList";
import SectionBanner from "../../../Sheard/SectionBanner/SectionBanner";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import ViewBtn from "../../../components/ViewBtn/ViewBtn";
import useMenuCategoryData from "../../../hooks/useMenuCategoryData";

const Soup = () => {
  const soupMenu = useMenuCategoryData("soup");

  return (
    <div>
      <SectionBanner
        img={soupBg}
        title={"soups"}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />

      <div className="max-w-5xl mb-14 mx-auto">
        <div className="item_container grid grid-cols-1 md:grid-cols-2 gap-8">
          {soupMenu.map((item, index) => (
            <MenuList item={item} key={index} />
          ))}
        </div>
        <Link to='/shop/soup'>
          <ViewBtn btnText={"ORDER YOUR FAVOURITE FOOD"} />
        </Link>
      </div>
    </div>
  );
};

export default Soup;
