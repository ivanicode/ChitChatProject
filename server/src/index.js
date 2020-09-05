const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const booksRouter = require('./routes/books');
const userRouter = require('./routes/user');

const clientBuildDir = path.resolve('./dist/client');
const port = 8080;

const app = express();

app.use(express.static(clientBuildDir)); 
app.use(bodyParser.json());
app.use('/api/books', booksRouter);
app.use('/api/user', userRouter);

app.get('/*', (req, res) => {
    res.sendFile(
        'index.html',
        {
            root: clientBuildDir
        }
    );
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
