import mongoose from "mongoose";
mongoose.set("strictQuery", false);
const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((con) => console.log(`Database connected: ${con.connection.host}`))
    .catch((error) => {
      console.log(error);
    });
};
export default connectDatabase;
