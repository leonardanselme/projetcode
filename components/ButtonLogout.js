"use client";

import { signOut } from "next-auth/react"; // ATTENTION, bien importer signOut comme ici et pas
//  depuis auth.js, pour des raisons de sécurité
//Le bouton est accessible côté client, donc on veut être sûr que le bouton ne puisse pas être utilisé côté serveur.
//Et que le client ait accès à des informations sensibles comme les clés d'API.

const ButtonLogout = () => {
  return (
    <button className="btn btn-ghost" onClick={() => signOut()}>
      Logout
    </button>
  );
};

export default ButtonLogout;
