import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "UnAuthorized" });
  }
  token = token.replace("Bearer ", "");
  const secretKey = process.env.JWT_SECRET_KEY;
  try {
    const decoded = jwt.verify(token, secretKey);
    // console.log(decoded, "req.body");
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "UnAuthorized--->", error });
  }
};

export default authMiddleware;
