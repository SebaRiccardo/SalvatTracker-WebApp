const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "development") {

  const envFound = dotenv.config();
  if (envFound.error) {
    // This error should crash whole process
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
  }
}

module.exports={
  database_connection_url: process.env.DB_URL,
  mail:{
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APPLICATION_PASSWORD,
    host:process.env.MAIL_HOST,
  }

}
