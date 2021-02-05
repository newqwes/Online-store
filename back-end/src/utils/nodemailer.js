import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport(
  {
    service: process.env.ORDER_SERVICE,
    auth: {
      user: process.env.ORDER_USER,
      pass: process.env.ORDER_PASS,
    },
  },
  {
    from: `Mailer Test ${process.env.ORDER_USER}`,
    to: process.env.ORDER_USER,
    subject: 'New order!',
  }
);

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log('Email sent: ', info);
  });
};

export default mailer;
