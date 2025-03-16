import { createTransport } from 'nodemailer';
import formidable from 'formidable';
import { readFileSync } from 'fs';

export default defineEventHandler(async (event) => {
  try {
    // Configurer formidable pour analyser les données multipart
    const form = formidable({
      multiples: true,
      keepExtensions: true,
      uploadDir: '/tmp',
    });

    // Analyser la requête
    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(event.node.req, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    // Configurer le transporteur d'email
    const transporter = createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER || 'votre-email@gmail.com',
        pass: process.env.SMTP_PASS || 'votre-mot-de-passe',
      },
    });

    // Préparer le contenu de l'email
    let emailContent = `
      <h2>Nouveau feedback reçu</h2>
      <p><strong>Type:</strong> ${fields.type}</p>
      <p><strong>Email:</strong> ${fields.email || 'Non fourni'}</p>
      <p><strong>Message:</strong> ${fields.message}</p>
      <p><strong>URL:</strong> ${fields.url}</p>
      <p><strong>User Agent:</strong> ${fields.userAgent}</p>
      <p><strong>Date:</strong> ${new Date(fields.timestamp).toLocaleString()}</p>
    `;

    // Préparer les pièces jointes
    const attachments = [];
    if (files.screenshot) {
      attachments.push({
        filename: 'screenshot.png',
        content: readFileSync(files.screenshot.filepath),
        encoding: 'base64',
      });
    }

    // Envoyer l'email
    await transporter.sendMail({
      from: `"Feedback PNIA" <${process.env.SMTP_USER || 'no-reply@pnia.com'}>`,
      to: 'jeanluc@houedanou.com',
      subject: `Nouveau feedback: ${fields.type}`,
      html: emailContent,
      attachments,
    });

    return { success: true, message: 'Feedback envoyé avec succès' };
  } catch (error) {
    console.error('Erreur lors de l\'envoi du feedback:', error);
    return createError({
      statusCode: 500,
      statusMessage: 'Erreur lors de l\'envoi du feedback',
    });
  }
});
