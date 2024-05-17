import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ChefRecommend = () => {
  return (
    <div className="max-w-5xl mx-auto mb-14">
      <SectionTitle subtitle={"Should Try"} title={"CHEF RECOMMENDS"} />

      <div className="food_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="food_item">
          <img
            className="w-full h-[200px] object-cover"
            src="http://localhost:5173/src/assets/home/slide1.jpg"
            alt=""
          />
          <div className="bg-[#F3F3F3] text-center p-8">
            <h2 className="text-xl font-semibold mb-2">Caeser Salad</h2>
            <p className="text-sm font-medium mb-5">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="btn btn-outline border-0 border-b-4 bg-[#E8E8E8] border-[#BB8506] uppercase text-[#BB8506]">
              add to cart
            </button>
          </div>
        </div>

        <div className="food_item">
          <img
            className="w-full h-[200px] object-cover"
            src="http://localhost:5173/src/assets/home/slide1.jpg"
            alt=""
          />
          <div className="bg-[#F3F3F3] text-center p-8">
            <h2 className="text-xl font-semibold mb-2">Caeser Salad</h2>
            <p className="text-sm font-medium mb-5">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="btn btn-outline border-0 border-b-4 bg-[#E8E8E8] border-[#BB8506] uppercase text-[#BB8506]">
              add to cart
            </button>
          </div>
        </div>

        <div className="food_item">
          <img
            className="w-full h-[200px] object-cover"
            src="http://localhost:5173/src/assets/home/slide1.jpg"
            alt=""
          />
          <div className="bg-[#F3F3F3] text-center p-8">
            <h2 className="text-xl font-semibold mb-2">Caeser Salad</h2>
            <p className="text-sm font-medium mb-5">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="btn btn-outline border-0 border-b-4 bg-[#E8E8E8] border-[#BB8506] uppercase text-[#BB8506]">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommend;
