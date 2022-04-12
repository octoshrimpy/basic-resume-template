
//: so as to hide/show individual ones

//begin processing everything together.

$(document).ready(function() {

  // fetch json
  fetch("./data.json")
    .then(response => response.json())
    .then(data => {
    
      //Retrieve the template data from the HTML .
      var source = $('#resume-template').html();
    
      //compile the template engine
      var template = Handlebars.compile(source);
    
      //attach variables to compiled source
      var output = template(data);
    
      //add to body
      $(document.body).append(output);

    })
  
});
