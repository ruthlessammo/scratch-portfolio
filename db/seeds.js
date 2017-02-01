const mongoose = require('mongoose');
const Project = require('../models/project');

let mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost/portfolio';
mongoose.connect(mongoUri);

Project.collection.drop();

Project.create([{
  title: 'Presidential Dash',
  about: 'Fun retro styled JavaScript Game topically based on the 2016 US Presidential Elections. Technologies used included: JavaScript, jQuery, HTML5, CSS3. Originally written in ES5 but since has been converted to ES6.',
  githubLink: 'https://github.com/ruthlessammo/WDI-Project-1',
  herokuLink: 'http://presidentialdash.herokuapp.com/',
  image: 'http://i.imgur.com/SHkrEEN.png'
},{
  title: 'Disaster Squawk',
  about: 'A group project where you can learn about the world’s natural disasters in real time.  This project involved taking into account project management within a group and how to deal with conflicts. Making requests to MongoDB as well as the implementation of external APIs such as NASA and Twitter. The technology used was jQuery, Node.JS, Express, AJAX, external APIs MongoDB, HTML5 and SCSS.',
  githubLink: 'https://github.com/eduardofasano/chuckecheese',
  herokuLink: 'http://disastersquawk.herokuapp.com/',
  image: 'http://i.imgur.com/YwZJ5C7.png'
},{
  title: 'Twitter4London',
  about: 'A group project in which we built a mobile web app designed for the London Underground. That incorporates live updates from TFL and also integrated with twitter. Again group dynamic was taken into account. Tech used included HTML5, SCSS, AngularJS, Express, Node.js, MongoDB, AJAX, and Skeleton framework.',
  githubLink: 'https://github.com/edwardrdavies/WDI_London_Project_3',
  herokuLink: 'http://twitterforlondon.herokuapp.com/',
  image: 'http://i.imgur.com/ljobCaO.png'
},{
  title: 'Ruthless Muzic',
  about: 'A secure community music curation platform, whereby members can post and share music from SoundCloud. Here other members may like and comment. With the feature of having songs and users ranked by community likes. The technology used was a Ruby on Rails backend API, PostgreSQL database, coupled with an AngularJS frontend, HTML5 and SCSS were also included in the build.',
  githubLink: 'https://github.com/ruthlessammo/wdi-project-4-frontend',
  herokuLink: 'http://ruthlessmuzic.herokuapp.com/',
  image: 'http://i.imgur.com/LwiZkWU.png'
},{
  title: 'KeepHush Website (Under Construction)',
  about: 'A MODERN MEMBERS CLUB FOR UNDERGROUND MUSIC LOVERS, CENTRED AROUND REGULAR, LIVE STREAMED MUSIC EVENTS.',
  githubLink: 'TBA',
  herokuLink: 'TBA',
  image: 'http://i.imgur.com/hJ7tcfX.png'
},{
  title: 'Blockchain Certification Platform (TBA)',
  about: 'By using the Stampery API we can open a new world of possibilities by overcoming all the limitations inherent to public blockchains and allowing timestamping and anchoring of an unlimited amount of data. With a view to create an platform whereby one can easily submit proof of ownership of personal property on both the Bitcoin and Ethereum Blockchains',
  githubLink: 'TBA',
  herokuLink: 'TBA',
  image: 'http://i.imgur.com/EcZbBYP.png'
}], (err, projects) => {
  if(err) console.log('There was an error creating projects', err);

  console.log(`${projects.length} projects created!`);
  mongoose.connection.close();
});
