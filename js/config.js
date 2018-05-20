var data = {

  heading: {
    name: "Marcos Jones",
    subtitle: "Frontend developer",
    email: 'email.mail.com'
  }

  objective: {

  }

  jobs: {[
    {
      jobInfo:{
        title:"",
        company:"",
        times:"",
        location:""
      },
      descriptions:{
        desc:"",
        desc:"",
        desc:""
      }
    },
    {

    },
    {

    }
  ]}
};



$(document).ready(function() {
  //Retrieve the template data from the HTML .
  var source = $('#resume-template').html();

  //compile the template engine
  var template = Handlebars.compile(source);

  //set variables
  //vars hiding in ./main.js
  //behind a variable called data
  $.getJSON('.data.json')
    .done(function(data){
      var data = data;
    });

  //attach variables to compiled source
  var output = template(data);

  //add to body
  $(document.body).append(output);

});
