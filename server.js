import http from "node:http"
import { dirname } from "node:path"
import serveStatic from "./utils/serveStatic.js"
import { getContentType } from "./utils/getContentType.js"
import { getData } from "./utils/getData.js"
import {handleGet} from "./handlers/routeHandlers.js"
import {handlePost} from "./handlers/routeHandlers.js"
import { handleNews } from "./handlers/routeHandlers.js"


const PORT = 8000
const __dirname = import.meta.dirname

const server = http.createServer(async (req,res)=>{

    if(req.url==='/api'){
        
        if (req.method === 'GET'){
            await handleGet(res)
        }
        if (req.method == 'POST'){
           await handlePost(req,res)
        }
    }else if (req.url === "/api/news") {

      return await handleNews(req, res)
    }
    else if(!req.url.startsWith('/api')){
        return await serveStatic(__dirname,req,res) 
    }


}

)


server.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
})


