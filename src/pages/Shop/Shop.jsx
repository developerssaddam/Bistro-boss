import PageBanner from "../../Sheard/PageBanner/PageBanner";
import shopPageBannerImg from "../../assets/shop/banner2.jpg";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenuCategoryData from "../../hooks/useMenuCategoryData";
import FoodCard from "../../components/FoodCard/FoodCard";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Shop = () => {
  const { category } = useParams();
  const categories = ["salad", "pizza", "soup", "dessert", "drinks", "offered"];
  const initialIndex = categories.indexOf(category);

  const [index, setIndex] = useState(initialIndex);

  const salads = useMenuCategoryData("salad");
  const pizzas = useMenuCategoryData("pizza");
  const soups = useMenuCategoryData("soup");
  const desserts = useMenuCategoryData("dessert");
  const drinks = useMenuCategoryData("drinks");
  const offeredFood = useMenuCategoryData("offered");

  return (
    <div>
      <PageBanner
        img={shopPageBannerImg}
        title={"our shop"}
        subtitle={"Would you like to try a dish?"}
      />

      <div className="tab_area max-w-5xl mx-auto mb-5">
        <Tabs defaultIndex={index} onSelect={(index) => setIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
            <Tab>OFFERS</Tab>
          </TabList>

          <TabPanel>
            <div className="max-w-5xl mx-auto mb-14">
              <div className="food_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {salads.map((item, index) => (
                  <FoodCard key={index} item={item} />
                ))}
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="max-w-5xl mx-auto mb-14">
              <div className="food_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {pizzas.map((item, index) => (
                  <FoodCard key={index} item={item} />
                ))}
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="max-w-5xl mx-auto mb-14">
              <div className="food_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {soups.map((item, index) => (
                  <FoodCard key={index} item={item} />
                ))}
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="max-w-5xl mx-auto mb-14">
              <div className="food_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {desserts.map((item, index) => (
                  <FoodCard key={index} item={item} />
                ))}
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="max-w-5xl mx-auto mb-14">
              <div className="food_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {drinks.map((item, index) => (
                  <FoodCard key={index} item={item} />
                ))}
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="max-w-5xl mx-auto mb-14">
              <div className="food_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {offeredFood.map((item, index) => (
                  <FoodCard key={index} item={item} />
                ))}
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
