const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('get');
    res
        .status(200)
        .send({
            items: [
                {
                    id: 1,
                    title: 'Lord of the Rings'
                },
                {
                    id: 2,
                    title: 'Zawód wiedźma'
                },
                {
                    id: 3,
                    title: 'Dune'
                },
                {
                    id: 4,
                    title: 'Córka Krwawych'
                },
            ]
        })
});

module.exports = router;
