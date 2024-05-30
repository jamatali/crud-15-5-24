import userModel from "../../model/auth/index.js";
import bcrypt, { compare, hash } from "bcrypt";
import jwt from "jsonwebtoken";
const koiBName = process.env.JWT_SECRET_KEY;
const authController = {
  signUp: async (req, res) => {
    try {
      const payload = req.body;

      const userExist = await userModel.findOne({
        where: {
          email: payload.email,
        },
      });
      if (userExist) {
        return res.status(401).json({ message: "User Already Exists" });
      }

      const hPassword = await bcrypt.hash(payload.password, 10);

      await userModel.create({
        ...payload,
        password: hPassword,
      });
      // const user = new userModel({
      //   firstName: payload.firstName,
      //   lastName: payload.lastName,
      //   email: payload.email,
      //   password: hPassword,
      // });

      // await user.save();
      res.status(200).json({ message: "User Created Successfull" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  signIn: async (req, res) => {
    try {
      // const payload = req.body;
      const { email, password } = req.body;
      let userExist = await userModel.findOne({
        where: {
          email,
        },
      });
      if (!userExist) {
        return res.status(401).json({ message: "Invalid Credentials" });
      }

      const isPasswordValid = await bcrypt.compare(
        password,
        userExist.password
      );
      userExist = userExist.toJSON();
      // console.log("useExists =====>:", userExist);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid Credentials" });
      }
      const secretKey = process.env.JWT_SECRET_KEY;
      delete userExist.password;

      const jwtToken = jwt.sign(userExist, secretKey, { expiresIn: "1h" });

      res.status(200).json({ message: "Sign in successful", jwtToken });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

export default authController;
