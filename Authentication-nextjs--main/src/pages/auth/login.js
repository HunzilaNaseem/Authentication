import Form from "@/components/auth/form";
import { signIn } from "next-auth/react";

export default function SignIn () {
const onSubmit = async(email, passward) =>{
const data = await signIn('credentials',{redirect: false, email, passward});
console.log(data)
};
 return <Form signin={true} onFormSubmit={onSubmit} />
};
