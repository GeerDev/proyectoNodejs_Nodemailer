const express = require('express');

const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: false}));

app.use( express.static('public') );

app.use( require('./routes/email'))

app.listen(PORT, () => {
    console.log('Server started on PORT', PORT);
})