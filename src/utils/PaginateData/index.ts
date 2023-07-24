import { ObjectId } from "mongoose";
import PaginateDTO from "./PaginateDTO";
import paginateWithId from "./paginateWithId";
import paginateWithoutId from "./paginateWithoutId";
/**
 * This is a simple paginate function. I'm still using mongoose features but I wanted to make this part of my project more functional and more reusable.
 * @param page The query page variable comes in here.
 * @param limit The items limitation per page.
 * @param entityName The entity name that should be used.
 * @param repository The repository that will be manipulated.
 * @param findId If there is an id to search from a specific collection, you must place it here. Not a mandatory parameter.
 * @returns a object with a message, statusCode and the requisition result.
 */
async function PaginateData(page:number, limit:number, entityName:string, repository:any, findId?:ObjectId):Promise<PaginateDTO>{
    const skip = (page - 1) * limit;
    let paginatedData;

    if(findId){
        paginatedData = await paginateWithId(findId, skip, limit, repository)
    } else {
        paginatedData = await paginateWithoutId(skip, limit, repository)
    }

    const { totalItems, result } = paginatedData;

    const entityCall = totalItems < 2 ? `${entityName}` : `${entityName}s`;
    const totalPages = Math.ceil(totalItems / limit);

    const answerToGetAll = `There is ${totalItems} ${entityCall} at the database.`
    const answerToGetFromParent = `There is ${totalItems} ${entityCall} from the id ${findId}.`

    let message:string;
    let statusCode:number;

    if (totalItems < 1) {
        message = `There is no ${entityName}s at this collection.`
        statusCode = 404
        return { message, statusCode }
    } else if (page > totalPages){
        message = `The current page is empty. Return to page ${totalPages}.`
        statusCode = 404
        return { message, statusCode }
    } else {
        message = findId ? answerToGetFromParent : answerToGetAll
        statusCode = 200
    }

    const pageInfo = {
        totalPages,
        limitPerPage: limit,
        currentPage: Number(page)
    }
    
    return {
        message: message,
        statusCode: statusCode,
        pageInfo,
        result
    }
}

export default PaginateData