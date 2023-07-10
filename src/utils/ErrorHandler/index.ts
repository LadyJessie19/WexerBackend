const newError = (message:string, statusCode:number) => {
    return {
        error: true,
        message,
        statusCode,
      }
}

export default newError