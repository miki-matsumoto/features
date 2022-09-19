import NextAuth, { Session, unstable_getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@features/prisma";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    //jwtが作成・更新された時に呼ばれる
    async jwt({ token, account, user }) {
      const existingUser = await prisma.user.findUnique({
        where: { email: token.email ?? "" },
      });
      if (!existingUser) return token;

      if (!user)
        return {
          id: existingUser.id,
          email: existingUser.email,
          name: existingUser?.name,
        };

      return token;
    },
    //セッションがチェックされた時に呼ばれる
    async session({ session, token, user }) {
      console.log(token);
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          name: token.name,
          username: token.username,
        },
      };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
