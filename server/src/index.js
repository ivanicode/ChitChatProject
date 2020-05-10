const express = require('express');
const path = require('path');

const clientBuildDir = path.resolve('./dist/client');
const port = 8080;

const app = express();

app.use(express.static(clientBuildDir));

app.get('/*', (req, res) => {
    res.sendFile(
        'index.html',
        {
            root: clientBuildDir
        }
    );
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
