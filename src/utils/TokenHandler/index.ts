import JWT from "jsonwebtoken";

class TokenHandler {
    constructor(private secretKey:string){}
    /**
     * Validate the authenticity of a JWT token
     * @param token 
     * @param options 
     * @returns 
     */
    async verify(token:string, options?:object){
       return JWT.verify(token, this.secretKey, options)
    }
    /**
     * Decode a JWT token to extract the token payload
     * @param token 
     * @param options 
     * @returns 
     */
    async decode(token:string, options?:object){
        return JWT.decode(token, options)
    }
    /**
     * Generate a new JWT token based on the provided payload
     * @param payload 
     * @param options 
     * @returns 
     */
    async sign(payload:object, options?:object){
        return JWT.sign(payload, this.secretKey, options)
    }
}

export default TokenHandler