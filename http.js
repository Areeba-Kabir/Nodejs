const http=require('http')
const fs=require('fs')
const url=require('url')

const myserver=http.createServer((req,res)=>{
    
    if ((req.url) == '/favicon.ico')
    return res.end(); 

    const log=(`date:${Date.now()} req method: ${req.method} url: ${req.url} //new request received\n`);
    //utilising url library
    const myurl=url.parse(req.url,true);
    console.log(myurl);
    
    fs.appendFile('logfile.txt',log,(err,data)=>{

        //console.log(req);
        
        switch(myurl.pathname){
            case '/':
                if(req.method == "GET"){
                    const username=myurl.query.myname
                    res.end (`welcome home ${username} !`);
                }
                break;
            case '/about':
                if(req.method=="GET"){
                    res.end (`This is about page`)
                }
                else if(req.method=="POST"){
                    //database Query
                    res.end(`Submission Success`);
                }
            break;
            case '/search':
                if(req.method == "GET")
                {
                    const search=myurl.query.search_query;
                    res.end ('these are the results for:'+search)
                }
            break;
            default:
                res.end (`404 page not found`)
                break;
        }
    })
        
})

myserver.listen(3000,()=>{
    console.log("server listens on port 3000");
})
