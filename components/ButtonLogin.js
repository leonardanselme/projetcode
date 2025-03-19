"use client";

import Link from "next/link";
import { signIn } from "next-auth/react"; // ATTENTION, bien importer signIn comme ici et pas
//  depuis auth.js, pour des raisons de sécurité
//Le bouton est accessible côté client, donc on veut être sûr que le bouton ne puisse pas être utilisé côté serveur.
//Et que le client ait accès à des informations sensibles comme les clés d'API.

const ButtonLogin = ({ session, extraStyle }) => {
  const dashboardUrl = "/dashboard";
  if (session) {
    return (
      <Link
        href={dashboardUrl}
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        <p>Welcome back {session.user.name || "friend"}</p>
      </Link>
    );
  } else {
    return (
      <button
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
        onClick={() => {
          signIn(undefined, { callbackUrl: dashboardUrl }); //On a 2 providers, on ne sait pas lequel choisir, donc on laisse undefined}}
        }}
      >
        Get started
      </button>
    );
  }
};

export default ButtonLogin;
