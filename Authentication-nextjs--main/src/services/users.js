import { compare } from 'bcrypt';
import fs from 'fs';
import path from 'path';
//import { hash } from 'bcryptjs';

const filePath = path.join(process.cwd(),"src", "data", "users.json");

export function getAll () {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

export function getById (id) {
    const data = getAll();
    return data.find(p => p.id === Number(id));
}

export function getByEmail (email) {
    const data = getAll();
    return data.find(p => p.email.toLowerCase() === email.toLowerCase());
}

export async function varifypassward (hashedpassward, passward) {
    const isValid = await compare(passward, hashedpassward);
    const data = getAll();
    return isValid;
}

export async function save (email, passward) {
    const found = getByEmail(email);
    if(found){
        throw new Error("User already exist");
    }
    const data = getAll();
    const hashedpassward = await hash(passward, 12);
    data.push({
        id: data.length + 1,
        email, 
        passward:hashedpassward
    });
    fs.writeFileSync(filePath, JSON.stringify(data));
}