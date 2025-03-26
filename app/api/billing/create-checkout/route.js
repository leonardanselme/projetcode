import { NextResponse } from "next/server";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Stripe from "stripe";

/**
 * Route API pour créer une session de paiement Stripe
 * Cette fonction gère la création d'une session de paiement Stripe pour les abonnements
 * @param {Request} req - Objet requête de Next.js
 * @returns {Response} Réponse JSON contenant l'URL de redirection Stripe ou une erreur
 */
export async function POST(req) {
  try {
    // Récupération du corps de la requête (données envoyées en JSON)
    const body = await req.json();

    // Vérification de la présence des URLs de redirection obligatoires
    if (!body.success_url || !body.cancel_url) {
      // Renvoie une erreur 400 si les URLs ne sont pas fournies
      return NextResponse.json(
        {
          error: "Success_url and cancel_url are required",
        },
        { status: 400 }
      );
    }

    // Récupération de la session d'authentification de l'utilisateur actuel
    const session = await auth();

    // Connexion à la base de données MongoDB
    await connectMongo();

    // Récupération des informations utilisateur depuis la base de données
    const user = await User.findById(session.user.id);

    // Mise à jour de l'ID client Stripe de l'utilisateur si fourni dans la requête
    // Note: Cette ligne stocke l'ID client Stripe reçu dans la requête mais n'effectue pas de save()
    user.stripeCustomerId = body.stripeCustomerId;

    // Initialisation de l'API Stripe avec la clé secrète
    const stripe = new Stripe(process.env.STRIPE_API_KEY);

    // Création d'une session de paiement Stripe pour un abonnement
    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      // Mode "subscription" pour les paiements récurrents (abonnement)
      mode: "subscription",

      // Définition des produits/services à acheter
      line_items: [
        {
          // ID du prix/plan défini dans Stripe
          price: process.env.STRIPE_PRICE_ID,
          // Quantité (généralement 1 pour un abonnement)
          quantity: 1,
        },
      ],

      // URL de redirection en cas de paiement réussi
      success_url: body.success_url,

      // URL de redirection en cas d'annulation
      cancel_url: body.cancel_url,

      // Email du client (prérempli dans le formulaire Stripe)
      customer_email: user.email,

      // ID de référence client (pour associer le paiement à l'utilisateur)
      client_reference_id: user._id.toString(),
    });

    // Renvoie l'URL de la page de paiement Stripe en cas de succès
    return NextResponse.json({ url: stripeCheckoutSession.url });
  } catch (e) {
    // Gestion des erreurs - renvoie un message d'erreur avec le statut 500
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
