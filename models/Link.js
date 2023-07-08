import mongoose from "mongoose";
const linkSchema = new mongoose.Schema({
  originalUrl: String,
  shortUrl: String,
});

const Link = mongoose.model("Link", linkSchema);
export default Link;
