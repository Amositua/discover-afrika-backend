import { Router } from 'express';
import authMiddleware  from '../middleware/authMiddleware.js';

import { register, login, verifyEmail, forgotPassword, resetPassword, resendEmailVerificationCode, resendForgotPasswordCode } from '../controllers/authController.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/verify-email', verifyEmail);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.post('/resend-email-code', resendEmailVerificationCode);
router.post('/resend-password-code', resendForgotPasswordCode);

router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

export default router;