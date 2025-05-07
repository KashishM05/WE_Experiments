const http=require("http");
const server=http.createServer((req,res) => {
    res.write("Hello World!");
    res.end();
});
server.listen(9000,() => {
    console.log("Server is running...");
});