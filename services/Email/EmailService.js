const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const config = require("../../config");
const fs = require("fs");

class EmailService {

  constructor() {

  }

  async sendEmail(data) {
    const source = fs.readFileSync(data.template, "utf8");
    const compiledTemplate = handlebars.compile(source);

    const transporter = this._createTransporter()

    const result = await transporter.sendMail({
      from: config.mail.user,
      to: data.email,
      subject: data.subject,
      //text: "name/nickname: "+ data.payload.writer +"  \nMessage: "+data.payload.message
      html: compiledTemplate(data.payload),
    });

    console.log("Mail enviado con exito a : " + result.accepted[0]);

    return { enviado: result.accepted[0], rechazado: result.rejected[0] };
  }

  _createTransporter(){

    const transporter = nodemailer.createTransport({
      host: config.mail.host,
      port: 465,
      secure: true,
      auth: {
        user: config.mail.user,
        pass: config.mail.pass,
      },
    });

    transporter.verify().then(
      (ready) => {
      console.log("Ready for send emails",ready);
    });

    return transporter
  }
}

module.exports = EmailService;
