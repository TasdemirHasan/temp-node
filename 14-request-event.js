const http =require('http')

//cost server = http.createServer((req,res)=>{
// res.end('Welcome')
//})


//Using Event Emiiter API
const server = http.createServer()

//emits request event
//subcribe to it/ listen for it/ repond to it

server.on('request', (req, res) =>{
  res.end('Welcome')
})

server.listen(5000)