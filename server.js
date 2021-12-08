const {syncAndSeed, Book} = require('./db');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/assets', express.static(path.join(__dirname, 'assets')))


app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')))

app.get('/books', async (req, res, next)=>{
    try{
        res.send(await Book.findAll());
    }
    catch(ex){
        next(ex);
    }
})

app.delete('/books/delete-book/:id', async (req, res, next)=>{
    try{
        const oneBook = await Book.findByPk(req.params.id)
        oneBook.destroy();
        res.send(await Book.findAll())
    }
    catch(ex){
        next(ex);
    }
})


// app.get('/api/users/:id', async (req, res, next)=>{
//     try{
//         res.send(await User.findByPk(req.params.id));
//     }
//     catch(ex){
//         next(ex);
//     }
// })

const init = async()=>{
    try{
        await syncAndSeed();
        const port = process.env.PORT || 3000;
        app.listen(port, ()=> console.log(`listening on port ${port}`))
    }
    catch(ex){
        console.log(ex)
    }
}

init();

module.exports = app