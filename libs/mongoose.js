import mongoose from "mongoose"; // Import de mongoose pour la connexion à MongoDB
import User from "@/models/User"; // Import du modèle User pour les utilisateurs
import Board from "@/models/Board"; // Import du modèle Board pour les tableaux

// Fonction asynchrone pour se connecter à MongoDB
const connectMongo = async () => {
  try {
    // Tentative de connexion à MongoDB avec l'URI spécifié dans les variables d'environnement
    await mongoose.connect(process.env.MONGO_URI);
  } catch (e) {
    // Erreur lors de la connexion
    // Note: il y a une faute de frappe dans "console" (écrit "consol")
    consol.error("Mongoose Error:" + e.message);
    // Cela devrait être corrigé en "console.error"
  }
};

// Export de la fonction pour l'utiliser dans d'autres fichiers
export default connectMongo;
