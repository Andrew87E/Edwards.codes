import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  database: process.env.DB_URI,
  session: {
    jwt: true
  },
  jwt: {
    secret: 'alfads1324sdjkh8907342'
  },
})
