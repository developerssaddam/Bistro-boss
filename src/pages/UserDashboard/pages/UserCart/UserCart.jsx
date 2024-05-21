import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useCarts from "../../../../hooks/useCarts";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UserCart = () => {
  const axiosSecure = useAxiosSecure();
  const [carts, refetch] = useCarts();
  const totalPrice = carts.reduce(
    (initialValue, item) => initialValue + item.price,
    0
  );

  // handleDeleteItem
  const handleDeleteCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts?id=${id}`).then((res) => {
          if (res.data.acknowledged) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
          refetch();
        });
      }
    });
  };

  return (
    <div className="py-10">
      <Helmet>
        <title>Dashboard | My Cart </title>
      </Helmet>

      <div>
        <SectionTitle
          title={"Wanna add more?"}
          subtitle={"My Cart"}
        ></SectionTitle>
        <div className="bg-white shadow-xl max-w-5xl mx-auto p-14">
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl font-semibold uppercase">
              Total orders : {carts.length}
            </h2>
            <h2 className="text-2xl font-semibold uppercase">
              Total Price : $ {totalPrice}
            </h2>
            <button className="btn btn-md bg-[#D1A054] text-white">Pay</button>
          </div>

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
                {carts.map((item, index) => (
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
                      <button
                        onClick={() => handleDeleteCart(item._id)}
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
    </div>
  );
};

export default UserCart;
