/**
 * The PaginateData function is splited in two smaller functions: paginateWithId and paginateWithoutId.
 * @param skip how many items should be skiped at the database.
 * @param limit The limitation to the items that will be returned in the request.
 * @param repository The repository that will be manipulated.
 * @returns a object with the totalItems and the result.
 */
async function paginateWithoutId(skip:number, limit:number, repository:any){
    const result = await repository.getAllRep(skip, limit);
    return result
}

export default paginateWithoutId