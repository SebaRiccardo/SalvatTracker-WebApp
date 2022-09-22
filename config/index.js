const dotenv = require("dotenv");
const envFound = dotenv.config();

if (process.env.NODE_ENV === "DEV") {
  if (envFound.error) {
    // This error should crash whole process
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
  }
}

module.exports = {
  database_connection_url: process.env.DB_URL,
  mail: {
    service: process.env.EMAIL_SERVICE,
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APPLICATION_PASSWORD,
    host: process.env.MAIL_HOST,
  },
  environment: process.env.NODE_ENV,
};
