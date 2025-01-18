const express = require("express") // import express'
const path = require('path');
const app = express()              // create app 
const port = 80                   // port run on 80

// for serving static files

app.use('/static' , express.static('static'))

// set the template engine as pug
app.set('view engine' ,'pug')

// set the views directory
app.set('views',path.join(__dirname, 'views'))

// our pug demo endpoint
app.get("/demo" ,(req,res)=>{
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there and thanks for telling me how to use pubg' })

})


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

