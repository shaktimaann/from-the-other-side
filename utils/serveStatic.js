import path from 'node:path'
import fs from 'node:fs/promises'
import sendResponse from './sendResponse.js'
import { getContentType } from './getContentType.js'

export default async function serveStatic(baseDir,req,res){
    try{
        
    const publicPath = path.join(baseDir,'public')
    const filePath = path.join(publicPath,req.url === '/'?'index.html':req.url)
    const content = await fs.readFile(filePath)
    const ext = path.extname(filePath)
    const type = getContentType(ext)
    sendResponse(content,res,type,200)
    }
    catch(error){
        
        if(error.code === 'ENOENT'){
            const filePath = path.join(baseDir,'public','404.html')
            const content = await fs.readFile(filePath)
        
            sendResponse(content,res,'text/html',404)
        }else{
            const content = '<html><h1>Server Error: ${error.code}</h1></html>'
            sendResponse(content,res,'text/html',500)
        }
    }


}