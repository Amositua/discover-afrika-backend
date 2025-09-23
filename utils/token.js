import jwt from "jsonwebtoken";

export const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email }, 
    process.env.JWT_SECRET,
    { expiresIn: "15m" } // short-lived
  );
};

export const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user.id }, 
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" } // longer-lived
  );
};
