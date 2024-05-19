import PageBanner from "../../Sheard/PageBanner/PageBanner";
import shopPageBannerImg from "../../assets/shop/banner2.jpg";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenuCategoryData from "../../hooks/useMenuCategoryData";
import FoodCard from "../../components/FoodCard/FoodCard";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./Shop.css";

// Swiper slider for pagination
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + "</span>";
  },
};

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

  // Total page count
  const saladsPage = [...Array(Math.ceil(salads.length / 6)).keys()];
  const pizzasPage = [...Array(Math.ceil(pizzas.length / 6)).keys()];
  const soupsPage = [...Array(Math.ceil(soups.length / 6)).keys()];
  const dessertsPage = [...Array(Math.ceil(desserts.length / 6)).keys()];
  const drinksPage = [...Array(Math.ceil(drinks.length / 6)).keys()];
  const offeredFoodPage = [...Array(Math.ceil(offeredFood.length / 6)).keys()];

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Shop</title>
      </Helmet>

      <PageBanner
        img={shopPageBannerImg}
        title={"our shop"}
        subtitle={"Would you like to try a dish?"}
      />

      <div className="category_tab tab_area max-w-5xl mx-auto mb-5">
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
            <Swiper
              pagination={pagination}
              modules={[Pagination]}
              className="mySwiper"
            >
              {saladsPage.map((index) => (
                <SwiperSlide key={index}>
                  <div className="max-w-5xl mx-auto mb-14">
                    <div className="food_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {salads
                        .slice(index * 6, (index + 1) * 6)
                        .map((item, index) => (
                          <FoodCard key={index} item={item} />
                        ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </TabPanel>

          <TabPanel>
            <Swiper
              pagination={pagination}
              modules={[Pagination]}
              className="mySwiper"
            >
              {pizzasPage.map((index) => (
                <SwiperSlide key={index}>
                  <div className="max-w-5xl mx-auto mb-14">
                    <div className="food_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {pizzas
                        .slice(index * 6, (index + 1) * 6)
                        .map((item, index) => (
                          <FoodCard key={index} item={item} />
                        ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </TabPanel>

          <TabPanel>
            <Swiper
              pagination={pagination}
              modules={[Pagination]}
              className="mySwiper"
            >
              {soupsPage.map((index) => (
                <SwiperSlide key={index}>
                  <div className="max-w-5xl mx-auto mb-14">
                    <div className="food_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {soups
                        .slice(index * 6, (index + 1) * 6)
                        .map((item, index) => (
                          <FoodCard key={index} item={item} />
                        ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </TabPanel>

          <TabPanel>
            <Swiper
              pagination={pagination}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dessertsPage.map((index) => (
                <SwiperSlide key={index}>
                  <div className="max-w-5xl mx-auto mb-14">
                    <div className="food_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {desserts
                        .slice(index * 6, (index + 1) * 6)
                        .map((item, index) => (
                          <FoodCard key={index} item={item} />
                        ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </TabPanel>

          <TabPanel>
            <Swiper
              pagination={pagination}
              modules={[Pagination]}
              className="mySwiper"
            >
              {drinksPage.map((index) => (
                <SwiperSlide key={index}>
                  <div className="max-w-5xl mx-auto mb-14">
                    <div className="food_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {drinks
                        .slice(index * 6, (index + 1) * 6)
                        .map((item, index) => (
                          <FoodCard key={index} item={item} />
                        ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </TabPanel>

          <TabPanel>
            <Swiper
              pagination={pagination}
              modules={[Pagination]}
              className="mySwiper"
            >
              {offeredFoodPage.map((index) => (
                <SwiperSlide key={index}>
                  <div className="max-w-5xl mx-auto mb-14">
                    <div className="food_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {offeredFood
                        .slice(index * 6, (index + 1) * 6)
                        .map((item, index) => (
                          <FoodCard key={index} item={item} />
                        ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
