import React from "react";
import SectionBanner from "../../../Sheard/SectionBanner/SectionBanner";
import MenuList from "../../../Sheard/MenuList/MenuList";
import ViewBtn from "../../../components/ViewBtn/ViewBtn";
import useMenuCategoryData from "../../../hooks/useMenuCategoryData";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import { Link } from "react-router-dom";

const Salads = () => {
  const saladsMenu = useMenuCategoryData("salad");
  return (
    <div>
      <SectionBanner
        img={saladBg}
        title={"Salads"}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />

      <div className="max-w-5xl mb-14 mx-auto">
        <div className="item_container grid grid-cols-1 md:grid-cols-2 gap-8">
          {saladsMenu.map((item, index) => (
            <MenuList item={item} key={index} />
          ))}
        </div>
        <Link to="/shop/salad">
          <ViewBtn btnText={"ORDER YOUR FAVOURITE FOOD"} />
        </Link>
      </div>
    </div>
  );
};

export default Salads;
