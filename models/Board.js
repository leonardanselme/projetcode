import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true, // On ne peut pas créer un board sans user id valide
    ref: "User",
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

export default mongoose.models.Board || mongoose.model("Board", boardSchema);
