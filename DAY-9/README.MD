res.sendFile('./public/hello.txt', 'test.txt')
//this is use to send file from backend to frontend 
file name is hello.txt but we are sending as a name of test.txt

we make templates with the help of jade which is similar to html
in this we need a variable (which is at line 5 in views/index.js)in which data is rendered

we use jade to render file from server side
we use jade only because less code lines + most popular
