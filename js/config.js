
//Retrieve the template data from the HTML .
var source = $('#handlebars-demo').html();

//compile the template engine
var template = Handlebars.compile(source);

//replace the variables within the compiled source
var html = template({
  name: "Marcos Jones",
  subtitle: "Frontend developer"
});

//add to body
$('body').append(html);
