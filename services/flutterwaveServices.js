import axios from "axios";

export const generatePaymentLink = async (booking, user) => {
  const tx_ref = `BOOKING-${booking._id}-${Date.now()}`;

  const payload = {
    tx_ref,
    amount: booking.totalPrice,
    currency: "NGN",
    redirect_url: "http://localhost:5000/payment-success", // your frontend success page
    customer: {
      email: user.email || "test@example.com",
      phonenumber: user.phone || "0000000000",
      name: user.name || "Anonymous",
    },
    customizations: {
      title: "Discover Afrika Booking",
      description: `Payment for booking ${booking._id}`,
    },
  };

  try {
    const response = await axios.post(
      "https://api.flutterwave.com/v3/payments",
      payload,
      {
        headers: {
          Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
        },
      }
    );

    // Flutterwave returns "data.link"
    return { link: response.data.data.link, tx_ref };
  } catch (error) {
    console.error("Flutterwave error:", error.response?.data || error.message);
    throw error;
  }
};

export const verifyTransaction = async (transactionId) => {
  return await flw.Transaction.verify({ id: transactionId });
};
