import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/history/${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="py-10">
      <Helmet>
        <title>Dashboard | payment history </title>
      </Helmet>

      <div>
        <SectionTitle
          title={"payment history"}
          subtitle={"My Payment"}
        ></SectionTitle>
        <div className="bg-white shadow-xl max-w-5xl mx-auto p-14">
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl font-semibold uppercase">
              Total orders : {payments?.length}
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="uppercase bg-[#D1A054] text-white">
                  <th>SL-No</th>
                  <th>Email</th>
                  <th>Amount</th>
                  <th>Transection ID</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {payments?.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>

                    <td>{item.email}</td>
                    <td>$ {item.amount}</td>
                    <td>{item.transectionId}</td>
                    <td>{item.date}</td>
                    <td>{item.status}</td>
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

export default PaymentHistory;
