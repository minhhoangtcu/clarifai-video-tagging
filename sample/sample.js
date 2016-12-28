require('dotenv').config(); // Yes can either store your client ID and secret within an .env file or just paste them directly
const App = require('clarifai-video-tagging');

const app = new App(process.env.ID, process.env.SECRET);
// const app = new App('somethingsomething id here', 'secret here'); // paste directly here

app.predictVideo('http://www.w3schools.com/html/mov_bbb.mp4')
  .then((tag) => {
    const classes = tag.classes;

    classes.forEach(allClassesAtTime => {
      const tempClasses = allClassesAtTime
        .reduce((acc, cur) => {
          return acc + cur + " ";
        }, "");

      console.log(tempClasses);
    });
  });