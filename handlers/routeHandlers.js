import { getData } from "../utils/getData.js";
import sendResponse from "../utils/sendResponse.js";
export default async function handleGet(res){

    const data = await getData()
    const parsedData = JSON.stringify(data)
    sendResponse(parsedData,res,'application/json',200)

}


