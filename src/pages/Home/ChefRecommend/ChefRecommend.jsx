import FoodCard from "../../../components/FoodCard/FoodCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenuCategoryData from "../../../hooks/useMenuCategoryData";

const ChefRecommend = () => {
  const saladsItems = useMenuCategoryData("salad");

  return (
    <div className="max-w-5xl mx-auto mb-14">
      <SectionTitle subtitle={"Should Try"} title={"CHEF RECOMMENDS"} />

      <div className="food_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {saladsItems.slice(0, 3).map((item, index) => (
          <FoodCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ChefRecommend;
