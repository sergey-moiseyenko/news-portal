let express = require('express'),
  app = express();
let fs = require('fs');
let bodyParser = require('body-parser');
let articleMapper = require(__dirname + '/server/db/data-mapper/article-mapper').articleMapper;
let userMapper = require(__dirname + '/server/db/data-mapper/user-mapper').userMapper;
let tagMapper = require(__dirname + '/server/db/data-mapper/tag-mapper').tagMapper;

//<-- express use -->
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//<-- post methods -->
app.post('/user', (req, res) => {
  let reqUser = req.body;
  let users = userMapper.getUsersFromDb();
  let user = users.find(user => user.name === reqUser.name && user.password === reqUser.password);
  if (!user) res.status(400).send('Wrong password or userName');
  userMapper.setCurrentUserToDb(user);
  res.json(reqUser);
});

app.post('/articles', (req, res) => {
  articleMapper.setArticlesToDb(req.body);
  res.json(req.body);
});

app.post('/tag', (req, res) => {
  tagMapper.updateTags(req.body);
  res.json(req.body);
});

//<-- get methods -->
app.get('/articles', (req, res) => {
 res.send(JSON.stringify(articleMapper.loadArticles()));
});

app.get('/current_user', (req, res) => {
  res.send(JSON.stringify(userMapper.getCurrentUserFromDb()));
});

app.get('/users', (req, res) => {
  res.json(userMapper.getUsersFromDb());
});

app.get('/tags', (req, res) => {
  res.send(JSON.stringify(tagMapper.getTagsFromDb()));
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/UI/html/index.html');
});

//<--delete methods -->
app.delete('/logout', (req, res) => {
  userMapper.deleteCurrentUserFromDb();
  res.json({userWasRemoved: 'ok'});
});

app.listen(3000);
