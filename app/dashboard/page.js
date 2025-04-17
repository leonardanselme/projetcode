import Link from "next/link";
import ButtonLogout from "@/components/ButtonLogout";
import FormNewBoard from "@/components/FormNewBoard";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import ButtonCheckout from "@/components/ButtonCheckout";
import ButtonPortal from "@/components/ButtonPortal";

async function getUser() {
  const session = await auth();

  await connectMongo();
  // Recherche l'utilisateur par son ID dans la base de données
  // et charge (populate) tous les documents liés au champ "boards"
  // Cela permet d'obtenir non seulement l'ID des tableaux mais leurs données complètes
  return await User.findById(session.user.id).populate("boards");
}

export default async function Dashboard() {
  const user = await getUser(); //Dès que quelqu'un arrive sur la page, on récupère l'utilisateur connecté et ses tableaux

  console.log(user);

  return (
    <main className="flex-1">
      {/*HEADER*/}
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
          {user.hasAccess ? <ButtonPortal /> : <ButtonCheckout />}
          <ButtonLogout />
        </div>
      </header>

      <section className="container mx-auto space-y-6 py-8 md:py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
        <FormNewBoard />

        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {user.boards.length} Boards
          </h1>

          <ul className="space-y-4 ">
            {user.boards.map((board) => {
              return (
                <li key={board._id}>
                  <Link
                    href={`dashboard/b/${board._id}`}
                    className="block bg-white border border-gray-300 p-6 rounded-3xl hover:bg-neutral hover:text-neutral-content duration-200"
                  >
                    {board.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
