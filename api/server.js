const fs = require('fs');

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;


  function filterTag(tag, projects)
  {
    var newProjects = [];
    projects.forEach(element => {
        if (element.tag == tag)
        {
            newProjects.push(projects);
        }
    });

    return newProjects;
  }
  function getFilterString(filterTag, allFilters)
  {
        for (var i = 0; i < allFilters.length; i++)
        {
            if (allFilters[i].startsWith(filterTag))
            {
                return allFilters[i].splice(0,filter.length);
            }
        }
        return "";
  }
  function filterSearch(requestString)
  {
      var allFilter = requestString.split(",");

      return {
          "tags": getFilterString("tags:", allFilters).split(","), 
      }
  }
app.get("/search", (req, res))
{
    var requestString = req.requestString;

    let rawdata = fs.readFileSync('TODO.json');
    let allInfo = JSON.parse(rawdata);
    let allProjects = allInfo["projects"];
    
    var searchFilter = filterSearch(requestString);
    
    allProjects = filterTag(searchFilter, allProjects);

    //do something
    res.send(allProjects);
}
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);