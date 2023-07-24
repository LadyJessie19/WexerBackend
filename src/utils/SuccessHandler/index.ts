/**
 * It's for the return messages. It spares code lines.
 * @param message Set your request message here.
 * @param statusCode Now, the request status code.
 * @param data This parameter is optional. You can place any object in here.
 * @returns a return object
 */
const newSuccess = (message:string, statusCode:number, data?:object | undefined, token?:string) => {
  return {
    message,
    statusCode,
    data,
    token
  }
}

export default newSuccess