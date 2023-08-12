import { getByEmail } from "@/services/users";
import NextAuth from "next-auth"

import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  session:{
jwt:true
  },
  providers: [
    CredentialsProvider({
     async authorize({email, passward}){
    const user = getByEmail(email);
    if(!user){
        throw new Error("User not found");
    }
    const isValid = await verifypassward(user.passward,passward);
    if(!isValid){
        throw new Error("Incorrect passward");
    }
    return{email};
     }
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)