import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AdminAddItem = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // Image upload to imgBB.com
    const imageURL = { image: data.image[0] };

    const res = await axiosPublic.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMAGE_HOSTING_KEY
      }`,
      imageURL,
      {
        headers: { "content-type": "multipart/form-data" },
      }
    );

    const newItem = {
      name: data.name,
      price: data.price,
      category: data.category,
      recipe: data.recipe,
      image: res.data.data.url,
    };

    // Now save newItem data to db
    axiosSecure.post("/food/menu", newItem).then((res) => {
      if (res.data.acknowledged) {
        reset()
        Swal.fire({
          text: `${data.name} is added successfully!`,
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Helmet>
        <title> Admin | Add Item</title>
      </Helmet>

      <SectionTitle
        title={"add an item"}
        subtitle={"What's New?"}
      ></SectionTitle>

      <div className="bg-[#F3F3F3] p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe name*</span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </label>

          <div className="flex flex-col md:flex-row gap-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full "
                defaultValue="default"
              >
                <option disabled value="default">
                  Select-Category
                </option>
                <option value="drinks">Drinks</option>
                <option value="popular">popular</option>
                <option value="dessert">Dessert</option>
                <option value="pizza">Pizza</option>
                <option value="salad">Salad</option>
                <option value="soup">Soup</option>
                <option value="offered">Offered</option>
              </select>
              {errors.category && (
                <span className="text-red-500">Category is required!</span>
              )}
            </label>

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                {...register("price", { required: true })}
                type="text"
                placeholder="Price"
                className="input input-bordered w-full "
              />
              {errors.price && (
                <span className="text-red-500">Price is required</span>
              )}
            </label>
          </div>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered"
              placeholder="Recipe Details"
            ></textarea>
            {errors.recipe && (
              <span className="text-red-500">Recipe is required</span>
            )}
          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Photo*</span>
            </div>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered file-input-warning w-full"
            />
            {errors.image && (
              <span className="text-red-500">Photo is required</span>
            )}
          </label>

          <input
            className="btn btn-sm px-5  bg-gradient-to-r from-[#956A28] to-[#A4742D] text-white mt-6"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AdminAddItem;
