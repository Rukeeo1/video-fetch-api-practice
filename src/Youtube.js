import React from 'react';

const API = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA'
const channelID = 'UCXgGY0wkgOzynnHvSEVmE3A'
//const API = 'AIzaSyBldZD8QTH6uW32TdocbYNY9cq8pj0vbR8';
//const channelID = 'UC12hWjElFFPD_hQVHkoHQoQ';

const result = 10;

let finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}
`;

class Youtube extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resultyt: []
    };

    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    fetch(finalURL)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        const resultyt = responseJson.items.map(obj => obj.id.videoId);
        this.setState({ resultyt  });
        console.log(this.setState.resultyt)
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (
      <div>
        <button onClick={this.clicked}>Get youtube videos</button>
        <div className="youtube">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/GQu9C5JV0lE"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

export default Youtube;
