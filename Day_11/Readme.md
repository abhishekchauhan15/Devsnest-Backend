Sign in auth :))

npx express-generator
npm i && npx DEBUG=day-11:* npm start     

connectivity with db is done in app.js
sequalized is orm
we used sequalized because if in future if we want to change the db we can easily change that with some line of changes only
npm i --s sequelize

for hashing 
npm i -s bcrypt

npm i -s pg   

start postgrese by
sudo systemctl start/stop/restart postgresql(application)  //background  


day 12
npm i -s express-session redis connect-redis
redis is used so that we can we the information immediately