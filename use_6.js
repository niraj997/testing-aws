var http=require("http");

function process_request(req,res)
{
    res.end("<h1><i><b>Welcome to the world of NodeJs !!!</b><h3></i>");
    console.log(req.url);
}


var srv=http.createServer(process_request);
srv.listen(5000);
console.log("Server is running on port 5000");