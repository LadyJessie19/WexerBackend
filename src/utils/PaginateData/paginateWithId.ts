import { ObjectId } from "mongoose";
/**
 * The PaginateData function is splited in two smaller functions: paginateWithId and paginateWithoutId.
 * @param findId the parentId goes in here.
 * @param skip how many items should be skiped at the database.
 * @param limit The limitation to the items that will be returned in the request.
 * @param repository The repository that will be manipulated.
 * @returns a object with the totalItems and the result.
 */
async function paginateWithId(findId:ObjectId, skip:number, limit:number, repository:any){
    const { totalItems, result } = await repository.getFromParentRep(findId, skip, limit);
    return { totalItems, result }
}

export default paginateWithId