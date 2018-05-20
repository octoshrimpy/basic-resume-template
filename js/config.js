$(document).ready(function(){
  //Retrieve the template data from the HTML .
  var source = $('#handlebars-demo').html();

  //compile the template engine
  var template = Handlebars.compile(source);

  //set variables
  var data = {
    name: "Marcos Jones",
    subtitle: "Frontend developer"
  };

  //attach variables to compiled source
  var output = template(data);

  //add to body
  $(document.body).append(output);

});
