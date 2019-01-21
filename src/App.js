import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      date: '',
      pictureUrl: '',
      pictureHdUrl: '',
      explanation: ''
    }
  }


  componentDidMount(){
    fetch('https://api.nasa.gov/planetary/apod?api_key=bS1HyFl283wPXSX0HCeQEviRSPkOEFwLmORmnsrl').then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        title: data.title,
        date: data.date,
        pictureUrl: data.url,
        pictureHdUrl: data.hdurl,
        explanation: data.explanation
      });
      console.log(data);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="HeaderTitle">
            {this.state.title}
          </div>
          <div className="Date">
            ({this.state.date})
          </div>
        </header>
        <br />
        <main className="App-main">
          <div>
            <img src={this.state.pictureUrl} alt={this.state.title} className="Picture"></img>
          </div>
          <br />
          <div className="Explanation">
            {this.state.explanation}
          </div>
        </main>
      </div>
    );
  }
}



export default App;
