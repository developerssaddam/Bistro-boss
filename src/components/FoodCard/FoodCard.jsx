import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLocation, useNavigate } from "react-router-dom";
import useCarts from "../../hooks/useCarts";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price, _id } = item;
  const newRecipe = recipe.slice(0, 60);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();

  // refetch the new cart data from db
  const [, refetch] = useCarts();

  // handleAddToCart
  const handleAddToCart = () => {
    if (!user) {
      Swal.fire({
        title: "Your are not logged in user!",
        text: "Please Login first for Addtocart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          return navigate("/login", { state: location.pathname });
        }
      });
    } else {
      const newCard = {
        email: user.email,
        menuId: _id,
        name,
        image,
        price,
      };

      axiosSecure.post("/carts", newCard).then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            text: "You have successfully Add To Cart!",
            showConfirmButton: false,
            timer: 2500,
          });
          refetch();
        }
      });
    }
  };

  return (
    <div className="food_item relative">
      <p className="absolute right-5 top-5 bg-[#111827] text-white px-4 py-2 font-medium">
        ${price}
      </p>
      <img className="w-full h-[200px] object-cover" src={image} alt="" />
      <div className="bg-[#F3F3F3] text-center p-8">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-sm font-medium mb-5">{newRecipe}</p>
        <button
          onClick={handleAddToCart}
          className="btn btn-outline border-0 border-b-4 bg-[#E8E8E8] border-[#BB8506] uppercase text-[#BB8506]"
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
