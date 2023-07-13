import DoctorRepository from "../Doctor/DoctorRepository";
import { LoginDTO } from "./AuthDTO";

//Note: The repository to be used with the Auth service is the Doctor repository.
class AuthService{
    constructor(private repository: DoctorRepository){}

    //add error verification

    async createSer(body:LoginDTO){
        const mockBody = {name: "Name", email: "email@email.com", password:"password"}
        const result = await this.repository.createRep(mockBody)
        return {message: "Auth is served!", result}
    }
}

export default AuthService