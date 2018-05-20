/*
██████   █████  ████████  █████
██   ██ ██   ██    ██    ██   ██
██   ██ ███████    ██    ███████
██   ██ ██   ██    ██    ██   ██
██████  ██   ██    ██    ██   ██
*/

var data = new Object();

data.heading = {
  name: "Marchos Jones",
  subtitle: "Frontend developer",
  email: 'hitlerdidnothingwrong@hotmail.com'
};

data.objective = {
  description: ""
};

data.education = {
  school: "",
  city: "",
  degree: "",
  gradDate: "",
  gpa: "",
  honors: "",
  deansList: "" // number of semesters
};

data.projects = {
  projInfo: {
    projName: "",
    position: "",
    startEnd: "",
    location: ""
  },
  descriptions: {
    description: ""
  }
};

data.leadership = {
  organization: {
    organizationInfo: {
      organizationName: "",
      position: "",
      startEnd: "",
      location: ""
    },
    descriptions: {
      description: ""
    }
  }
};

data.work = {
  job: {
    jobInfo: {
      title: "",
      company: "",
      startEnd: "",
      location: ""
    },
    descriptions: {
      description: ""
    }
  }
};

data.skills = {
  skills: {
    skill: {
      skillLevel: "",
      descriptions: {
        description: ""
      }
    }
  }
};

data.awards = {
  awards: {
    award: {
      awardName: "",
      time: "",
      descriptions: {
        description: ""
      }
    }
  }
};

data.references = {
  contact: {
    name: "",
    position: "",
    company: "",
    phone: "",
    email: "",
    address: ""
  }
};

/*
 ██████  ██████  ███    ██ ███████ ██  ██████
██      ██    ██ ████   ██ ██      ██ ██
██      ██    ██ ██ ██  ██ █████   ██ ██   ███
██      ██    ██ ██  ██ ██ ██      ██ ██    ██
 ██████  ██████  ██   ████ ██      ██  ██████
*/

//TODO: add config targeting each section,
//: so as to hide/show individual ones

var config = {
  // chronological: 'chrono'
  // functional   : 'funct'
  organizeBy: "chrono",

  //write as comma-separated strings:
  //heading, objective, education, projects,
  //leadership, work, skills, awards, references
  hideSections: {}
}

//begin processing everything together.

/*
██       ██████   ██████  ██  ██████
██      ██    ██ ██       ██ ██
██      ██    ██ ██   ███ ██ ██
██      ██    ██ ██    ██ ██ ██
███████  ██████   ██████  ██  ██████
*/

$(document).ready(function() {
  //Retrieve the template data from the HTML .
  var source = $('#resume-template').html();

  //compile the template engine
  var template = Handlebars.compile(source);

  //attach variables to compiled source
  var output = template(data);

  //add to body
  $(document.body).append(output);

});
