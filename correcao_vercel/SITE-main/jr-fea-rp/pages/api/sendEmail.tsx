import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { nome, email, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  try {
    // Configura o transporte de e-mail
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "email.site.fea@gmail.com", // Substitua pelo seu e-mail
        pass: "qaxc btyb cafx tubp", // Substitua pela sua senha de aplicativo
      },
    });

    // Configuração do e-mail
    const mailOptions = {
      from: `"${nome}" <${email}>`, // Remetente
      to: "email.site.fea@gmail.com", // Destinatário
      subject: "Nova mensagem do formulário de contato",
      text: mensagem,
      html: `<p><strong>Nome:</strong> ${nome}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensagem:</strong> ${mensagem}</p>`,
    };

    // Envia o e-mail
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    res.status(500).json({ error: "Erro ao enviar o e-mail." });
  }
}
