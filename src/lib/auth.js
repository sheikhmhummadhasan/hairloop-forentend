import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db(process.env.AUTH_USER);

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    async sendResetPassword({ user, url }) {
      // url-e already token + callbackURL thake
      await sendEmail({
        to: user.email,
        subject: "Reset your password",
        html: `<p>Click here to reset your password: <a href="${url}">${url}</a></p>`,
      });
    },
  },
  user: {
    additionalFields: {
      role: {
        defaultValue: "seeker",
      },
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  database: mongodbAdapter(db, {
    client,
  }),
});
