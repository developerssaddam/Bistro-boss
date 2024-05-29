import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // handleMakeAdmin
  const handleMakeAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You wnat to be a an admin!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${id}`).then((res) => {
          refetch();
          if (res.data.acknowledged) {
            Swal.fire({
              text: "Successfull!",
              icon: "success",
            });
          }
        });
      }
    });
  };

  // handleDeleteuser.
  const handleDeleteUser = (id) => {
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
        axiosSecure.delete(`/users/${id}`).then((res) => {
          refetch();
          if (res.data.acknowledged) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="py-10">
      <Helmet>
        <title>Dashboard | All users </title>
      </Helmet>

      <div>
        <SectionTitle
          title={"Manage all users"}
          subtitle={"How Many??"}
        ></SectionTitle>
        <div className="bg-white shadow-xl max-w-5xl mx-auto p-14">
          <h2 className="text-2xl font-semibold uppercase mb-4">
            Total users : {users.length}
          </h2>

          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="uppercase bg-[#D1A054] text-white">
                  <th>SL-No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.role === "admin" ? (
                        "Admin"
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user._id)}
                          className="btn bg-[#D1A054] btn-sm text-white"
                        >
                          <FaUserAlt />
                        </button>
                      )}
                    </td>
                    <th>
                      <button
                        onClick={() => handleDeleteUser(user._id)}
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

export default AllUsers;
