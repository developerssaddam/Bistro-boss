import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: role, isPending: isAdminLoadin } = useQuery({
    queryKey: ["admin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      return res.data.role;
    },
  });
  return [role, isAdminLoadin];
};

export default useAdmin;
