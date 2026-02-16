export default function sendResponse(content,res,type,code){
    res.setHeader('content-type',type)
    res.statusCode = code
    res.end(content)

}