const FoodCard = ({ item }) => {
  const { image, name, recipe, price } = item;
  const newRecipe = recipe.slice(0, 60);
  return (
    <div className="food_item relative">
      <p className="absolute right-5 top-5 bg-[#111827] text-white px-4 py-2 font-medium">
        ${price}
      </p>
      <img className="w-full h-[200px] object-cover" src={image} alt="" />
      <div className="bg-[#F3F3F3] text-center p-8">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-sm font-medium mb-5">{newRecipe}</p>
        <button className="btn btn-outline border-0 border-b-4 bg-[#E8E8E8] border-[#BB8506] uppercase text-[#BB8506]">
          add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
