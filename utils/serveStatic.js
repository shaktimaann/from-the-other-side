import path from 'node:path'
import fs from 'node:fs/promises'
import sendResponse from './sendResponse.js'

export default async function serveStatic(baseDir,req,res,type){
    try{
    const filePath = path.join(baseDir,'public','index.html')
    const content = await fs.readFile(filePath)
    sendResponse(content,res,type,200)
    }
    catch(error){
        console.log(error)
        res.end('error')
    }

}