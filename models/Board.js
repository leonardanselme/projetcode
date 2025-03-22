import mongoose from "mongoose"; // Import de mongoose pour créer des schémas et modèles

// Définition du schéma pour les tableaux
const boardSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Type ObjectId (référence à un autre document)
    required: true, // Ce champ est obligatoire
    ref: "User", // Fait référence au modèle "User"
  },
  name: {
    type: String, // Type chaîne de caractères
    required: true, // Ce champ est obligatoire
    trim: true, // Supprime les espaces au début et à la fin de la chaîne
  },
});

// Export du modèle
// Si le modèle existe déjà, on l'utilise, sinon on le crée
export default mongoose.models.Board || mongoose.model("Board", boardSchema);
