import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { custom } from "openid-client";
import { connectToDatabase } from "./model/User";

const baseUrl = process.env.NEXTAUTH_URL;
export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const db = await connectToDatabase();
      if (account!.provider === "google" && user.email) {
        const User = db.model("User");
        const existingUser = await User.findOne({ email: user.email });
        if (existingUser) {
          return true;
        }
        await User.create({
          name: user.name,
          email: user.email,
          avatar: user.image ? user.image : "",
        });
      }
      return true;
    },
    async session({ session, token, user }) {
      session.user = user;
      return session;
    },
    async redirect() {
      return baseUrl + "/";
    },
  },
};
custom.setHttpOptionsDefaults({
  timeout: 0,
});
export default NextAuth(authOptions);
