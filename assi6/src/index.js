const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();
//connect to DB


    const db = mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('connected to DB')
    })
    // const db = mongoose.connect('mongodb://localhost/teja')
   
  


app.listen(3000, () => console.log('Server running......'));

