var Clarifai = require('clarifai');
var fetch = require('node-fetch');

const BASE = 'https://api.clarifai.com/v1/tag/?model=general-v1.3';

class App {

  constructor(id, secret) {
    this._app = new Clarifai.App(id,secret);
  }

  predictVideo(videoURL) {

    return new Promise((resolve, reject) => {

      this._app.getToken()
        .then(res => {

          const token = res.access_token;
          const url = `${BASE}&url=${videoURL}`;
          const headers = {Authorization: `Bearer ${token}`};

          fetch(url, {method: 'GET', headers: headers})
            .then((res) => {

              if (!res.ok) {
                throw new Error(res.statusText);
              }

              return res.json();

            }).then((json) => {
              const tag = json.results[0].result.tag;
              resolve(tag);
            }).catch(err => {
              reject(err); // Network connection type error
            });

        });
    });
  }

}

module.exports = App;
