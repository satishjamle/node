const express = require("express") // import express
const app = express()              // create app 
const port = 80                   // port run on 80


app.get("/",(req,res)=>{             // handle of get request / end point pr
    res.send("this is my homepage of my first express app with harry")

});

app.get("/about" ,(req,res)=>{            // handle of get request /about end point pr
    res.send("this is my about page express app with user")

})
app.post("/contact" ,(req,res)=>{             //// i want to post /contact handler pr of get request / end point pr
    res.send("ths is a post request contact page of my first express app with harry ")
})
;
app.post("/page" ,(req,res)=>{             // status ko hit krna ho tho
    res.status(404).send("this page is not found ")
})

app.listen(port ,()=>{            //app listen on port and response
    console.log(`the application started successfully on port ${port}`)

})

