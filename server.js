import http from "node:http"
import { dirname } from "node:path"
import serveStatic from "./utils/serveStatic.js"


const PORT = 8000
const __dirname = import.meta.dirname
const server = http.createServer(async (req,res)=>{
    console.log(req.url)

   await serveStatic(__dirname,req,res,'text/html',200)

}


)


server.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
})


