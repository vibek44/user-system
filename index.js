const app=require('./app')
const http=require('http')
const path=require('path')
const PORT=8000

const server=http.createServer(app)

server.listen(PORT,()=>{
    console.log(`server is running on port:${PORT}`)
})