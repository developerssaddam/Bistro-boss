import { useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./ManuList.css";
import { useState } from "react";

const ManuList = () => {
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenuList(data);
      });
  }, []);

  return (
    <div className="max-w-5xl mb-14 mx-auto">
      <SectionTitle subtitle={"Check it out"} title={"FROM OUR MENU"} />

      <div className="item_container grid grid-cols-1 md:grid-cols-2 gap-8">
        {menuList.map((menu, index) => (
          <div
            key={index}
            className="item flex gap-5 flex-col md:flex-row items-center p-3"
          >
            <img src={menu.image} alt="" />
            <div>
              <div className="flex justify-between">
                <h2 className="font_cinzel font-medium mb-2">
                  {menu.name} ---
                </h2>
                <p className="text-[#BB8506] text-lg font-medium">
                  $ {menu.price}{" "}
                </p>
              </div>
              <p className="text-sm">{menu.recipe}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="btn btn-outline border-0 border-b-4">
          VIEW FULL MENU
        </button>
      </div>
    </div>
  );
};

export default ManuList;
