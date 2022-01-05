var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.get("/search", (req, res))
{
    var requestString = req.requestString;
    //do something
    res.send();
}
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);