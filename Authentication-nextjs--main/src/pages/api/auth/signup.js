import { save } from "@/services/users";


export default function handler(req, res) {
    if(req.method !== "POST"){
        return res.handler(404).send();
    }

    const {email,passward} = req.body;
    try{
         save(email, passward)
         res.status(201).send();
    }catch (err){
    res.status(400).json({message: err});
    }
  }
  