Clarifai Video Tagging
=========

A wrapper library that allows tagging for videos

## Installation

  `npm i clarifai-video-tagging`

## Usage

    const App = require('clarifai-video-tagging');
    const app = new App(process.env.ID, process.env.SECRET); // Paste your client ID and secret here.
    
    // Print out an array of tags for each second
    app.predictVideo('http://www.w3schools.com/html/mov_bbb.mp4')
      .then((tag) => {
        const classes = tag.classes;
        console.log(classes);
      });
      
  Check out the sample folder for more examples.

## Motivation

Clarifai v2 API does not offer video tagging, but the first version does. This library is built on top of Clarifai v2 API while still offering the good old video tagging capability. 

## API Reference

`predict` is going to return a Promise and within tag, you are getting a JSON with 4 keys: `timestamps`, `classes`, `concept_ids`, and `probs`.

## TODO

- [ ] Allow video bytes tagging

## Contributors

Feel free to do whatever you want. This is my first Node.js Module, so I love feedback.
