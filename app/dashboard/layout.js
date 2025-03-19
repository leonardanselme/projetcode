import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function LayoutPrivate({ children }) {
  const session = await auth();

  if (!session) {
    redirect("/");
    //Redirige la personne sur la page d'accueil si elle n'est pas connectée
  }
  //Return children only if the user is authenticated
  return children;
}
