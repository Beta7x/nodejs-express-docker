const express = require('express');
const app = express()
const port = process.env.PORT ?? 3000;
const router = express.Router()
const path = __dirname + '/views/';

router.use((req, _res, next) => {
  console.log('/' + req.method);
  next();
});

router.get('/', (_req, res) => {
  res.sendFile(path + 'home.html');
});

router.get('/lasagna', (_req, res) => {
  res.sendFile(path + 'lasagna.html');
});

router.get('/guacamole', (_req, res) => {
  res.sendFile(path + 'guacamole.html');
});

router.get('/banana-bread', (_req, res) => {
  res.sendFile(path + 'banana_bread.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, () => {
  console.log('Nodejs Express Example App listening on port ' + port)
});
