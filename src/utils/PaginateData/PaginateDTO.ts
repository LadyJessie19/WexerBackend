interface PaginateDTO {
    message: string,
    statusCode: number,
    pageInfo?:object,
    result?:object
}

export default PaginateDTO