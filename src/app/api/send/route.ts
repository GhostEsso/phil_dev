import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Vérification de la clé API avant d'initialiser Resend
const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
  console.error('La clé API Resend n\'est pas configurée dans les variables d\'environnement');
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  try {
    // Vérification de la configuration de Resend
    if (!resend) {
      return NextResponse.json(
        { 
          error: 'Le service d\'envoi d\'emails n\'est pas configuré. Veuillez réessayer plus tard.',
          details: 'RESEND_API_KEY manquante'
        },
        { status: 503 }
      );
    }

    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'lilipitaham@gmail.com',
      subject: `Nouveau message de ${name}`,
      text: `
        Nom: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    if (!data) {
      throw new Error('Pas de réponse de Resend');
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Erreur détaillée:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Erreur lors de l\'envoi de l\'email',
      details: error instanceof Error ? error.stack : undefined
    }, { status: 500 });
  }
} 