import mongoose from "mongoose";
import { userSchema } from "../schemas/userSchema";

const { MONGO_URI } = process.env;

export class MongoDBService {
  constructor() {
    this.connect();
  }
  async connect() {
    try {
      await mongoose.connect(MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async login(user) {
    const User = mongoose.model("User", userSchema);
    const result = await User.findOne({ email: user.username });
    console.log(result);
    return {};
  }
}
