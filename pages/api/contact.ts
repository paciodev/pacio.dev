// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  status: string;
  data: any
}

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { createTransport } = require('nodemailer')
  const transport = createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  })

  const mailOptions = {
    from: `${req.body.name} <${req.body.email}>`,
    to: 'contact@pacio.dev',
    subject: `[pacio.dev] - ${req.body.name} - ${req.body.email}`,
    text: req.body.text,
    html: `
    <main style="font-family:sans-serif">
      <h3>Mail from: ${req.body.email}</h3>
      <hr />
      <p><b>Message:</b> ${req.body.message}</p>
    </main>
    `
  };

  if (req.method === 'POST') {
    transport.sendMail(mailOptions, function (error: any, info: any) {
      if (error) {
        console.log(error);
        return res.status(404).json({ status: 'error', data: error });
      }

      res.status(200).json({ status: 'success', data: info.response });
    })
  }
}

export default handler
