const express = require('express');
const app = express();
const port = 7777;
app.get('/', (req, res) => {
	res.send('up & running :)');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
