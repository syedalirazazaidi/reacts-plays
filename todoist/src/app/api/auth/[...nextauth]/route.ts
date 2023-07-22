import { connectToDB } from "@/lib/database";
import User from "@/models/user";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
interface OAuthConfig {
  clientId?: string;
  // Other properties of your OAuth configuration
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session

      const sessionUser = await User.findOne({
        email: session?.user?.email ?? "",
      });
      console.log(sessionUser, "ID");
      session = sessionUser._id.toString();
      // if (session && session?.user) {
      //   console.log(session, "SESSION");
      //   session.user = sessionUser._id.toString();
      // }

      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      console.log(account, ">>.>>.");
      try {
        await connectToDB();

        // check if user already exists
        const userExists = await User.findOne({ email: profile?.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile?.email,
            username:
              profile?.name.replace(" ", "").toLowerCase() ?? ("" || undefined),
            image: profile.picture ?? ("" || undefined),
          });
        }

        return true;
      } catch (error: any) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
  },
});
export { handler as GET, handler as POST };
