import jwt from "jsonwebtoken";

// Function to generate JWT token and set it as a secure HTTP-only cookie
export const generateTokenAndSetCookie = (user_id, roles, res) => {
  const token = jwt.sign(
    { userId: user_id, roles },  // Use `user_id` from the database
    process.env.JWT_SECRET,
    { expiresIn: "15d" }
  );

  res.cookie("jwt", token, {
    httpOnly: true,                        // Prevents client-side JavaScript access
    secure: process.env.NODE_ENV !== "development", // Use secure cookies in production
    sameSite: "strict",                   // CSRF protection
    maxAge: 15 * 24 * 60 * 60 * 1000,      // 15 days in milliseconds
  });

  console.log("Generated Token:", token);
  console.log("Decoded Token:", jwt.decode(token)); // For debugging only
};
