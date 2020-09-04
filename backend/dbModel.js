import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
  url: String,
  chanel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
});

//collection inside the database
export default mongoose.model("tiktokVideos", tiktokSchema);
