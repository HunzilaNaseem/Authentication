import Form from '@/components/auth/form';

export default function SignUp () {
    const onSubmit = async (email, passward) =>{
        try{
            const response = await fetch ("/api/auth/signup", {
                method: "POST",
                body: JSON.stringify({email, passward}),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(response.ok){
                alert("sign up succesfully");
            }
        }catch (err){
            console.error(err);
        }
     
    };
     return <Form signup={false} onFormSubmit={onSubmit} />
};
