const express = require('express')
const userRouter = require('./routes/user.routes')

const app = express()
const PORT = process.env.PORT || 5000
 

  
app.use(express.json())
app.use('/api/v1', userRouter) 
  

 
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})