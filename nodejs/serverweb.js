const http=require('http')
const PORT=3000
const fs=require('fs')

const server =http.createServer((req,res)=>{
    res.writeHead(200, {'content-type':'text/html'})
    fs.readFile('indexweb.html',(error,data)=>{
        if(error){
            res.writeHead(404)
            res.write('Page not found')
        }
        else{
            res.write(data)
        }
        res.end()
    })
    
})

server.listen(PORT,(error)=>{
    if(error){
        console.log("error while connecting")
    }
    else{
        console.log("server is running on port 3000")
    }
})
