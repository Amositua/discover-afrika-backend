import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
// import admin from "../middleware/adminMiddleware.js";

import {
  createBooking,
  getMyBookings,
  getAllBookings,
  cancelBooking,
  getBooking,
  initiatePayment,
  flutterwaveWebhook,
  verifyPayment,
} from "../controllers/bookingController.js";


const router = express.Router();

router.post("/booking", authMiddleware, createBooking);
router.get("/booking/my", authMiddleware, getMyBookings);

router.get("/booking/:id", authMiddleware, getBooking);
router.post("/booking/:id/pay", initiatePayment);

router.put("/booking/:id/cancel", authMiddleware, cancelBooking);
// router.get("/", authMiddleware, admin, getAllBookings);


// Flutterwave routes
router.post("/webhook", flutterwaveWebhook); // Flutterwave will call this
router.post("/verify", authMiddleware, verifyPayment); // manual verify

// routes/bookingRoutes.js
// router.post("/webhook", express.raw({ type: "application/json" }), flutterwaveWebhook);


export default router;
