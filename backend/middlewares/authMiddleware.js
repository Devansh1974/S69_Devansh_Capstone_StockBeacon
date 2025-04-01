const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token; // Get token from cookies

  if (!token) {
    return res.status(401).json({ msg: 'Unauthorized. No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to request
    next(); // Continue to the next middleware
  } catch (err) {
    return res.status(401).json({ msg: 'Unauthorized. Invalid token' });
  }
};

module.exports = authMiddleware;
