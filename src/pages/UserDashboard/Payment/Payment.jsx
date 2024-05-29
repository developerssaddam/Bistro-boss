import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

  return (
    <div className="max-w-3xl mx-auto mt-40">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
