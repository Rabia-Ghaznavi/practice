const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost/blog')
// ,{ 
//     useNewUrlParser: true, useUnifiedTopology: true
// })


app.set('view engine', 'ejs')


app.use(express.urlencoded({extended: false}))


app.get('/', (req,res)=> {
    const articles = [{
        title: 'test articles',
        createAt: new Date(),
        description: 'test description'

    },
   {
        title: 'test articles 2',
        createAt: new Date(),
        description: 'test description 2'

    }
]
    
    

    res.render('articles/index',{articles : articles })

})
app.use('/articles',articleRouter)

app.listen(5000) 