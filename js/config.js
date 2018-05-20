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
data.heading = {
  loop: false,
  name: "Marchos Jones",
  subtitle: "Frontend developer",
  email: 'hitlerdidnofingwrng@grandmamail.com'
};

data.objective = {
  loop: false,
  descriptions:  {
    description: ""
  }
};

data.education = {
  loop: false,
  school: "",
  city: "",
  degree: "",
  gradDate: "",
  gpa: "",
  honors: "",
  deansList:"" // number of semesters
};

data.projects = {
  loop: true,
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
  loop: true,
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
  loop: true,
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
  loop: true,
  skill: {
    skillLevel: "",
    descriptions: {
      description: ""
    }
  }
};

data.awards = {
  loop: true,
  award: {
    awardName: "",
      time: "",
      descriptions: {
        description: ""
    }
  }
};

data.references = {
  loop: true,
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
