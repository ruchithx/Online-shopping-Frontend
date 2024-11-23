// import NextAuth from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';
import { NextAuthOptions } from 'next-auth';

// import { Session } from 'next-auth';

// Extend the default Session type
declare module 'next-auth' {
  interface Session {
    accessToken?: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID!,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET!,
      issuer: process.env.KEYCLOAK_ISSUER!, // e.g., "https://your-keycloak-domain/auth/realms/your-realm"
    }),
  ],
  session: {
    strategy: 'jwt', // Use JSON Web Tokens for sessions
  },
  callbacks: {
    async jwt({ token, account }) {
      // Save access token to session
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Add access token to session object
      if (token?.accessToken) {
        session.accessToken = token.accessToken as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin', // Redirect users to a custom sign-in page
    signOut: '/auth/signout', // Redirect users after sign out
    // error: '/auth/error', // Redirect users if there's an error
    // callbackUrl: '/dashboard', // Redirect users after a successful login
  },
};

// export default NextAuth(authOptions);
