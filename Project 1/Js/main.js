var http = require("http");
var fs = require("fs");
const { type } = require("os");
const data = fs.readFileSync("Project 1/Html/main.html");

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type": "text/html"});
    res.end(data);
});
server.listen(80,'127.0.0.1',()=>{
    console.log("Started")
});