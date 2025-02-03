import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!process.env.RESEND_API_KEY) {
      throw new Error('La clé API Resend n\'est pas configurée');
    }

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
    });
  }
} 