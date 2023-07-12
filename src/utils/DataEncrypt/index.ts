import bcrypt from 'bcrypt'

class DataEncrypt{
    /**
     * Encryptates the data that has been provided.
     * @param data 
     * @param iterations 
     * @returns 
     */
    static async hash(data:string, iterations:number){
        return await bcrypt.hash(data, iterations)
    }
    /**
     * Compares if the both information has any similarities.
     * @param normalData not encryptated.
     * @param encryptedData encryptated. Got it?!
     * @returns 
     */
    static async compare(normalData:string, encryptedData:string){
        return await bcrypt.compare(normalData, encryptedData)
    }
}

export default DataEncrypt