const req=require('fs');
const http=require('http');
const html=req.readFileSync('./Files/printDataOnServer.html','utf-8');
const server=http.createServer((request,response)=>{
    response.end(html);
    console.log('a new request received');
})
server.listen(8000,'127.0.0.1',()=>{
    console.log('server has started');
})