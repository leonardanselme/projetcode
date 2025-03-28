//Boards privés, destinés à être utilisés par l'utilisateur connecté

import { redirect } from "next/navigation";
import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";
import { auth } from "@/auth";
import Link from "next/link";
import CardBoardLink from "@/components/CardBoardLink";
import ButtonDeleteBoard from "@/components/ButtonDeleteBoard";

const getBoard = async (boardId) => {
  const session = await auth();
  await connectMongo();
  const board = await Board.findOne({
    _id: boardId,
    userId: session?.user?.id,
  });

  if (!board) {
    redirect("/dashboard");
  } //Redirige l'utilisateur vers le tableau de bord s'il n'est pas autorisé à accéder à ce tableau
  return board;
};

export default async function FeedbackBoard({ params }) {
  const { boardId } = params; //identifiant unique du tableau

  const board = await getBoard(boardId);
  await board.save();

  return (
    <main className="bg-base-200 min-h-screen">
      {/*HEADER*/}
      <section className="bg base-100 ">
        <div className="max-w-5xl mx-auto px-5 py-3 flex ">
          <Link href="/dashboard" className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
            Back
          </Link>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-5 py-12 space-y-12">
        <h1 className="font-extrabold text-xl mb-4">{board.name}</h1>
        <CardBoardLink boardId={board._id.toString()} />
        <ButtonDeleteBoard boardId={board._id.toString()} />
      </section>
    </main>
  );
}
