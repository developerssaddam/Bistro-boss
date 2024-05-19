import "./MenuList.css";

const MenuList = ({ item }) => {
  return (
    <div className="item flex gap-5 flex-col md:flex-row items-center p-3">
      <img src={item.image} alt="" />
      <div>
        <div className="flex justify-between">
          <h2 className="font_cinzel font-medium mb-2">{item.name} ---</h2>
          <p className="text-[#BB8506] text-lg font-medium">$ {item.price} </p>
        </div>
        <p className="text-sm">{item.recipe}</p>
      </div>
    </div>
  );
};

export default MenuList;
