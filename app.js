const express = require('express');
const app = express();
const port = 7777;
app.get('/', (req, res) => {
	res.send('up & running :)');
});

app.get('/teapot', (req, res) => {
	res.set('X-pot-type', 'coffee');
	res.status(418);
	res.send('jk actually coffee');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
