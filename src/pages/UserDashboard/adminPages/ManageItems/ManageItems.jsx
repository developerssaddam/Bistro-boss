import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: allItems = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["allItems"],
    queryFn: async () => {
      const res = await axiosSecure.get("/food/menu");
      return res.data;
    },
  });

  // Loading
  if (isPending) {
    return <h1>Loading.....</h1>;
  }

  // handleDeleteMenuItem
  const handleDeleteMenuItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/food/menu/${id}`);
        refetch();
        if (res.data.acknowledged) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Admin | Manage items</title>
      </Helmet>
      <SectionTitle
        title="manage all items"
        subtitle="Hurry up!"
      ></SectionTitle>
      <div className="bg-white shadow-xl max-w-5xl mx-auto p-14">
        <h2 className="text-2xl font-semibold uppercase mb-4">
          Total Items : {allItems.length}
        </h2>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="uppercase bg-[#D1A054] text-white">
                <th>SL-No</th>
                <th>Item images</th>
                <th>Item name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {allItems.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>$ {item.price}</td>
                  <th>
                    <Link to={`/dashboard/admin/manageItems/edit/${item._id}`}>
                      <button className="btn bg-warning btn-sm text-white mr-4">
                        <FaEdit />
                      </button>
                    </Link>

                    <button
                      onClick={() => handleDeleteMenuItem(item._id)}
                      className="btn bg-red-500 btn-sm text-white"
                    >
                      <FaTrashAlt />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
