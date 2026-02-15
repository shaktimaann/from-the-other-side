import http from "node:http"
const PORT = 8000
const server = http.createServer((req,res)=>{

    res.setHeader('content-type','text/html')
    res.statusCode = 200
    res.end('<html><h1>The server is working</h1></html>')

}




)

server.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
})


