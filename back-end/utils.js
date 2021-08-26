import jwt from "jsonwebtoken";

export const generateToken = user => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    },
    process.env.JWT_SECRET || "!23123sdfsdfsadfsg4e543hghvbkk56432//k jjhdhsd",
    {
      expiresIn: "30d"
    }
  );
};
