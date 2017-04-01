let express = require('express'),
  app = express();
let fs = require('fs');
let bodyParser = require('body-parser');
let articleMapper = require(__dirname + '/server/db/data-mapper/article-mapper');
let userMapper = require(__dirname + '/server/db/data-mapper/user-mapper');

//<-- express use -->
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//<-- post methods -->
app.post('/user', (req, res) => {
  let reqUser = req.body;
  let users = new userMapper.UserMapper().getUsersFromDb();
  let user = users.find(user => user.name === reqUser.name && user.password === reqUser.password);
  if (!user) res.status(400).send('Wrong password or userName');
  new userMapper.UserMapper().setCurrentUserToDb(user);
  res.json(reqUser);
});

app.post('/articles', (req, res) => {
  let mapper = new articleMapper.ArticleMapper();
  mapper.setArticlesToDb(req.body);
  res.json(req.body);
});

//<-- get methods -->
app.get('/articles', (req, res) => {
 res.send(JSON.stringify(new articleMapper.ArticleMapper().loadArticles()));
});

app.get('/current_user', (req, res) => {
  res.send(JSON.stringify(new userMapper.UserMapper().getCurrentUserFromDb()));
});

app.get('/users', (req, res) => {
  res.json(new userMapper.UserMapper().getUsersFromDb());
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/UI/html/index.html');
});

app.delete('/logout', (req, res) => {
  new userMapper.UserMapper().deleteCurrentUserFromDb();
  res.json({userWasRemoved: 'ok'});
});

app.listen(3000);
