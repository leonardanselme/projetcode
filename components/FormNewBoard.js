"use client"; // Directive indiquant que ce composant doit être rendu côté client

import { useState } from "react"; // Import du hook useState de React pour gérer l'état local
import { useRouter } from "next/navigation"; // Utiliser 'next/navigation' au lieu de 'next/router'
import axios from "axios";
import toast from "react-hot-toast";

const FormNewBoard = () => {
  // Création de deux états locaux:
  // - name: pour stocker le nom du tableau en cours de saisie
  // - isLoading: pour gérer l'état de chargement pendant l'envoi de la requête
  const router = useRouter();
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = async (event) => {
    // Empêche le comportement par défaut du formulaire (rechargement de la page)
    event.preventDefault();

    // Si déjà en chargement, ne rien faire
    if (isLoading) return;

    // Définir l'état de chargement à true pour désactiver le bouton et afficher un indicateur
    setIsLoading(true);

    try {
      const data = await axios.post("/api/board", { name }); // Envoi de la requête POST à l'API avec le nom du tableau

      setName(""); // Réinitialisation de l'état name après la création du tableau
      toast.success("Board created successfully!"); // Affichage d'un message de succès à l'utilisateur
      router.refresh(); // Rechargement de la page pour afficher le nouveau tableau
      // Remarque: ici il y a un commentaire indiquant qu'il faudrait rediriger
      // vers la page dédiée au tableau nouvellement créé
    } catch (error) {
      const errorMessage = error.response?.data?.error || "An error occurred"; // Récupération du message d'erreur

      toast.error(errorMessage); // Affichage d'un message d'erreur à l'utilisateur
      // Le bloc catch est vide, ce qui signifie que les erreurs ne sont pas gérées
      // C'est une amélioration potentielle à apporter
    } finally {
      // Qu'il y ait une erreur ou non, on remet l'état de chargement à false
      setIsLoading(false);
    }
  };

  // Rendu du composant
  return (
    <form
      className="bg-base-100 p-8 rounded-3xl space-y-8"
      onSubmit={handleSubmit}
    >
      <p className="font-bold text-lg">Create a new feedback board</p>

      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Board name</span>
        </div>
        <input
          required
          type="text"
          placeholder="Future Unicorn Inc"
          className="input input-bordered w-full"
          value={name}
          onChange={(event) => setName(event.target.value)} // Met à jour l'état name lors de la saisie
        />
      </label>

      <button className="btn btn-primary w-full" type="submit">
        {isLoading && (
          <span className="loading loading-spinner loading-xs"></span>
        )}
        Create Board
      </button>
    </form>
  );
};

export default FormNewBoard;
