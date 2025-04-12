import jwt from 'jsonwebtoken';

// Middleware to verify JWT from cookie and attach user to request
export const protect = (req, res, next) => {
  const token = req.cookies.jwt;
  console.log("Token:", token);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: decoded.userId, roles: decoded.roles }; // Set user context
    console.log("Decoded Token:", decoded); // Debugging line
    next();
  } catch (error) {
    console.error("Invalid token:", error);
    res.status(403).json({ message: "Forbidden. Invalid token." });
  }
};

// Middleware to restrict access to manager-only routes
export const managerOnly = (req, res, next) => {
  if (req.user.roles !== 'manager') {
    return res.status(403).json({ message: 'Access denied. Manager only.' });
  }
  next();
};

// Middleware to allow babysitter-only routes
export const babysitterOnly = (req, res, next) => {
  if (req.user.roles !== 'babysitter') {
    return res.status(403).json({ message: 'Access denied. Babysitter only.' });
  }
  next();
};
 
 
export const generateTokenAndSetCookie = (userId, role, res) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET not set in environment");
  }

  const token = jwt.sign({ userId, roles: role }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });
};
