
import NextAuth from 'next-auth/next'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions: NextAuthOptions = {
  providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const user = {
                  id: '1',
                  email: 'user@email.com',
                  password: '123',
                  name: 'User Teste',
                  role: 'admin'
                };
                
                const isValidEmail = user.email === credentials?.email
                const isValidPassword = user.password === credentials?.password
        
                if (!isValidEmail || !isValidPassword) {
                  return null
                }
        
                return user
              }//criando usuarios para teste, normalmente pega do banco

        })
  ],

  callbacks: {
        jwt: async ({ token, user }) => {
          const customUser = user as unknown as any
    
          if (user) {
            return {
              ...token,
              role: customUser.role
            }
          }
    
          return token
        },

        session: async ({ session, token }) => {
            return {
              ...session,
              user: {
                name: token.name,
                email: token.email,
                role: token.role
              }
            }
        }
  },

  pages: {
    signIn: '/auth/login',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request'
  },
}
const handler = NextAuth(authOptions)


export { handler as GET, handler as POST }