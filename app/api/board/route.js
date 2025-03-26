// Import des dépendances nécessaires
import { NextResponse } from "next/server"; // Utilitaire de Next.js pour créer des réponses d'API standardisées
import { auth } from "@/auth"; // Fonction d'authentification provenant de NextAuth
import connectMongo from "@/libs/mongoose"; // Fonction pour se connecter à MongoDB
import User from "@/models/User"; // Modèle Mongoose pour les utilisateurs
import Board from "@/models/Board"; // Modèle Mongoose pour les tableaux (boards)

// Définition de la fonction qui sera appelée lors d'une requête POST à /api/board
export async function POST(req) {
  try {
    // Récupération du corps de la requête au format JSON
    const body = await req.json();

    // Vérification si le nom du tableau est fourni dans le corps de la requête
    if (!body.name) {
      // Si le nom est absent, retourner une erreur 400 (Bad Request)
      return NextResponse.json(
        {
          error: "Board name is required",
        },
        { status: 400 }
      );
    }

    // Récupération de la session d'authentification de l'utilisateur
    const session = await auth();

    // Vérification si l'utilisateur est authentifié
    if (!session) {
      // Si pas de session, retourner une erreur 401 (Unauthorized)
      return NextResponse.json(
        {
          error: "Unauthorized",
        },
        { status: 401 }
      );
    }

    // Connexion à la base de données MongoDB
    await connectMongo();

    // Recherche de l'utilisateur dans la base de données par son ID
    const user = await User.findById(session.user.id);

    if (!user.hasAccess) {
      // Si l'utilisateur n'a pas accès, retourner une erreur 403 (Forbidden)
      return NextResponse.json(
        {
          error: "Please subscribe first",
        },
        { status: 403 }
      );
    }

    // Création d'un nouveau tableau dans la base de données
    const board = await Board.create({ userId: user._id, name: body.name });

    // Ajout de l'ID du nouveau tableau dans la liste des tableaux de l'utilisateur
    user.boards.push(board._id);

    // Sauvegarde des modifications de l'utilisateur dans la base de données
    await user.save();

    // Retourne le tableau créé en réponse
    return NextResponse.json(board);
  } catch (e) {
    // En cas d'erreur, retourne un message d'erreur avec un statut 500 (Internal Server Error)
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = req.nextUrl;
    const boardId = searchParams.get("boardId");

    if (!boardId) {
      return NextResponse.json(
        { error: "boardId is required" },
        { status: 400 }
      );
    }

    const session = await auth();

    if (!session) {
      return NextResponse.json({ error: "Not authorized" }, { status: 401 });
    }

    const user = await User.findById(session?.user?.id);

    if (!user.hasAccess) {
      return NextResponse.json(
        { error: "Please subscribe first" },
        { status: 403 }
      );
    }

    await Board.deleteOne({
      _id: boardId,
      userId: session?.user?.id,
    });

    user.boards = user.boards.filter((id) => id.toString() !== boardId);
    await user.save();

    return NextResponse.json({});
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
