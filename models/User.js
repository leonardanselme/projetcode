import mongoose from "mongoose"; // Import de mongoose pour créer des schémas et modèles
import Board from "./Board"; // Import du modèle Board pour la référence
// Définition du schéma pour les utilisateurs
const userSchema = new mongoose.Schema({
  name: {
    type: String, // Type chaîne de caractères
    trim: true, // Supprime les espaces au début et à la fin de la chaîne
  },

  email: {
    type: String, // Type chaîne de caractères
    trim: true, // Supprime les espaces au début et à la fin de la chaîne
    lowercase: true, // Convertit la chaîne en minuscules
  },

  image: {
    type: String, // Type chaîne de caractères (URL de l'image)
  },

  boards: [
    {
      type: mongoose.Schema.Types.ObjectId, // Type ObjectId (référence à un autre document)
      ref: "Board", // Fait référence au modèle "Board"
    },
  ],
});

// Export du modèle
// Si le modèle existe déjà, on l'utilise, sinon on le crée
export default mongoose.models.User || mongoose.model("User", userSchema);
