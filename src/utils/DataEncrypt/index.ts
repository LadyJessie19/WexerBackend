import bcrypt from "bcrypt";

class DataEncrypt {
  /**
   * Encryptates the data that has been provided.
   * @param data
   * @param iterations
   * @returns
   */
  static hash(data: string, iterations: number) {
    return bcrypt.hashSync(data, iterations);
  }
  /**
   * Compares if the both information has any similarities.
   * @param normalData not encryptated.
   * @param encryptedData encryptated. Got it?!
   * @returns
   */
  static compare(normalData: string, encryptedData: string) {
    return bcrypt.compareSync(normalData, encryptedData);
  }
}

export default DataEncrypt;
