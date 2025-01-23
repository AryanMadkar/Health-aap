import jsonwebtoken from "jsonwebtoken";
import { promisify } from "util";

const ckeckauth = async (req, res, next) => {
  try {
    // Check for token in cookies
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }

    // Verify token
    const decoded = await promisify(jsonwebtoken.verify)(
      token,
      process.env.JWT_SECRET
    );

    // Attach user data to request object
    req.user = { id: decoded.id };
    next();
  } catch (err) {
    if (err.name === "JsonWebTokenError") {
      return res.status(403).json({ msg: "Token is not valid" });
    }
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ msg: "Token has expired" });
    }
    res.status(500).json({ error: "Server error" });
  }
};

export default ckeckauth;
