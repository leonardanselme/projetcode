import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true, //Espace entre les Strings
  },

  email: {
    type: String,
    trim: true,
    lowercase: true,
  },

  image: {
    type: String,
  },

  boards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Board",
    },
  ],
});

export default mongoose.models.User || mongoose.model("User", userSchema); //Si le model User existe déjà, on le prend, sinon on le crée.
