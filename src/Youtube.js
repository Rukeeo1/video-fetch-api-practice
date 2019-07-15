import React from 'react';

const API = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA';
const channelID = 'UCXgGY0wkgOzynnHvSEVmE3A';
//const API = 'AIzaSyBldZD8QTH6uW32TdocbYNY9cq8pj0vbR8';
//const channelID = 'UC12hWjElFFPD_hQVHkoHQoQ';

//<iframe width="560" height="315" src="https://www.youtube.com/embed/eRUM70CPYls" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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

componentWillMount(){
  fetch(finalURL)
      .then(response => response.json())
      .then(responseJson => {
        const resultyt = responseJson.items.map(
          obj => 'https://www.youtube.com/embed/' + obj.id.videoId
        );
        this.setState({ resultyt });
      })
      .catch(error => {
        console.error(error);
      });
}
  
  clicked() {
    // fetch(finalURL)
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     const resultyt = responseJson.items.map(
    //       obj => 'https://www.youtube.com/embed/' + obj.id.videoId
    //     );
    //     this.setState({ resultyt });
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }
  render() {
    console.log(this.state.resultyt);
    return (
      <div>
        <button onClick={this.clicked}>Get youtube videos</button>
        {
          this.state.resultyt.map((link, i) => {
            var frame = <div className="youtube" key={i}><iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/eRUM70CPYls" 
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          /></div>
          return frame;
          })
        }
       {this.frame}
      </div>
    );
  }
}

export default Youtube;
