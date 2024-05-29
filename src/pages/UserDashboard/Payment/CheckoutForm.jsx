import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCarts from "../../../hooks/useCarts";
import useAuth from "../../../hooks/useAuth";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [carts, refetch] = useCarts();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  // calculate totalAmount
  const totalAmount = carts.reduce((total, item) => total + item.price, 0);

  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    // create payment methods.
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      Swal.fire({
        icon: "error",
        text: `${error.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      // console.log(paymentMethod);
    }

    // Confirm payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });

    if (confirmError) {
      Swal.fire({
        icon: "error",
        text: `${confirmError.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const payment = {
        name: user.displayName,
        email: user.email,
        transectionId: paymentIntent.id,
        amount: totalAmount,
        status: "Pending",
        date: moment.utc(new Date()),
        cardIds: carts.map((item) => item._id),
        menuIds: carts.map((item) => item.menuId),
      };

      await axiosSecure.post("/payment/history", payment);
      refetch();
      Swal.fire({
        icon: "success",
        text: "Your payment is successfull!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard/payment/history");
    }
  };

  // load payment intent
  useEffect(() => {
    if (totalAmount > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalAmount })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalAmount]);

  return (
    <div>
      <div className="text-3xl bg-warning rounded-lg text-white font-semibold flex justify-between p-3 mb-16">
        <p>Total payable amount $ {totalAmount}</p>
        <p>Total items : {carts.length}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="max-w-52 mx-auto mt-28">
          <button
            className="btn btn-warning w-full"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
