interface serverErrorReturn{
  message: string, 
  statusCode: number,
  flag: string | undefined
}
/**
 * It's meant for the internal server errors.
 * @param error pass the error object here.
 * @returns an object for the request response.
 */
const serverError = (error: Error, flag?:string): serverErrorReturn => {
  return {
    message: error.message || "Internal server error.",
    statusCode: error.message ? 400 : 500,
    flag
  };
}

export default serverError;