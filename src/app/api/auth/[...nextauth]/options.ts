import GoogleProvider from "next-auth/providers/google";
import Auth0Provider from "next-auth/providers/auth0";
import KeycloakProvider from "next-auth/providers/keycloak";
import CredentialsProvider from "next-auth/providers/credentials";
import { Awaitable, User } from "next-auth";

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // !!! Should be stored in .env file.
    GoogleProvider({
      clientId:
        "1041339102270-e1fpe2b6v6u1didfndh7jkjmpcashs4f.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    Auth0Provider({
      clientId: "Be5vsLunFvpzPf4xfXtaMxrZUVBjjNPO",
      clientSecret:
        "08F9X84FvzpsimV16CQvlQuwJOlqk-GqQgEdcq_3xzrn1K3UHnTCcRgMCwBW7api",
      issuer: "https://dev-qg1ftdys736bk5i3.us.auth0.com",
    }),
    KeycloakProvider({
      clientId: "refine-demo",
      clientSecret: "refine",
      issuer: "https://lemur-0.cloud-iam.com/auth/realms/refine",
      profile(profile) {
        return {
          email: profile.email,
          id: profile.sub,
          image: "https://faces-img.xcdn.link/thumb-lorem-face-6312_thumb.jpg",
          name: profile.name ?? profile.preferred_username,
        };
      },
    }),
    CredentialsProvider({
      async authorize(credentials: any) {
        // TODO: Request your API to check credentials
        console.log("CredentialsSignIn", JSON.stringify(credentials, null, 2));

        // check credentials
        // if not valid return null
        if (credentials?.["email"] !== "demo@formel.dev") {
          return null;
        }

        const user: Awaitable<User> = {
          email: "demo@formel.dev",
          id: "1",
          image: "/images/avatar/300.jpeg",
          name: "Usuario Formel",
        };
        return user;
      },
      credentials: {},
      id: "CredentialsSignIn",
    }),
    CredentialsProvider({
      async authorize(credentials: any) {
        // TODO: Request your API to create new user
        console.log("CredentialsSignUp", JSON.stringify(credentials, null, 2));

        // return mocked user
        const user: Awaitable<User> = {
          email: "demo@formel.dev",
          id: "1",
          image: "/images/avatar/300.jpeg",
          name: "Usuario Formel",
        };
        return user;
      },
      credentials: {},
      id: "CredentialsSignUp",
    }),
  ],
  secret: "UItTuD1HcGXIj8ZfHUswhYdNd40Lc325R8VlxQPUoR0=",
};

export default authOptions;
