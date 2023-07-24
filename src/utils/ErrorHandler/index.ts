/**
 * This is a simple utils function. It spares code lines.
 * @param message The request message. Nice to feedback the dev.
 * @param statusCode The request status should be in here.
 * @param flag This is to point were the error is coming from.
 * @returns a response object.
 */
const newError = (message:string, statusCode:number, flag?:string | undefined) => {
    return {
        error: true,
        message,
        statusCode,
        flag
      }
}

export default newError