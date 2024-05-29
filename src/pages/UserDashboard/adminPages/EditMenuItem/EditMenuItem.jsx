import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const EditMenuItem = () => {
  const [oldData, setOldData] = useState({});
  const [preViewImg, setPreViewImg] = useState(null);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();


  // handleImageChange
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreViewImg(URL.createObjectURL(file));
    }
  };

  // Load current data
  useEffect(() => {
    axiosPublic.get(`/food/menu/item/${id}`).then((res) => {
      setOldData(res.data);
      setPreViewImg(res.data.image);
    });
  }, []);

  // Update form submit
  const onSubmit = async (data) => {
    // First img host on imgBB server
    const imageURL = { image: data.image[0] };

    if (imageURL.image) {
      const res = await axiosPublic.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMAGE_HOSTING_KEY
        }`,
        imageURL,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      const newItem = {
        name: data.name || oldData.name,
        price: data.price || oldData.price,
        category: data.category || oldData.category,
        recipe: data.recipe || oldData.recipe,
        image: res.data.data.url,
      };

      // Now save newItem data to db
      axiosSecure.patch(`/food/menu/item/${id}`, newItem).then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: `Updated successfull!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      const newItem = {
        name: data.name || oldData.name,
        price: data.price || oldData.price,
        category: data.category || oldData.category,
        recipe: data.recipe || oldData.recipe,
        image: preViewImg,
      };

      // Now save newItem data to db
      axiosSecure.patch(`/food/menu/item/${id}`, newItem).then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: `Updated successfull!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Helmet>
        <title> Admin | Edit menu item</title>
      </Helmet>

      <SectionTitle
        title={"update item"}
        subtitle={"What's new?"}
      ></SectionTitle>

      <div className="bg-[#F3F3F3] p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe name*</span>
            </div>
            <input
              {...register("name")}
              type="text"
              defaultValue={oldData.name}
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </label>

          <div className="flex flex-col md:flex-row gap-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                {...register("category")}
                className="select select-bordered w-full "
                defaultValue={oldData.category}
              >
                <option value="drinks">Drinks</option>
                <option value="popular">popular</option>
                <option value="dessert">Dessert</option>
                <option value="pizza">Pizza</option>
                <option value="salad">Salad</option>
                <option value="soup">Soup</option>
                <option value="offered">Offered</option>
              </select>
            </label>

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                {...register("price")}
                type="text"
                defaultValue={oldData.price}
                placeholder="Price"
                className="input input-bordered w-full "
              />
            </label>
          </div>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea
              {...register("recipe")}
              defaultValue={oldData.recipe}
              className="textarea textarea-bordered"
              placeholder="Recipe Details"
            ></textarea>
          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Photo*</span>
            </div>
            <input
              {...register("image")}
              type="file"
              onChange={handleImageChange}
              className="file-input file-input-bordered file-input-warning w-full"
            />
            {/* img previewArea */}
            {preViewImg && (
              <div className="form-control w-full mt-4">
                <img src={preViewImg} alt="Preview" />
              </div>
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

export default EditMenuItem;
