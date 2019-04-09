import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { DeliveryClient } from 'kentico-cloud-delivery';

const client = new DeliveryClient({ projectId: "975bf280-fd91-488c-994c-2f04416e5ee3" });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      articles: []
    };
  }

  componentDidMount() {
    client.items()
      .type("article")
      .getPromise()
      .then(result => {
        console.log(result.items);
        this.setState({
          loaded: true,
          articles: result.items
        });
      })
  }


  render() {
    const articles = this.state.articles.map(article => (<li key={article.system.id}>{article.elements.title.value}</li>));
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {this.state.loaded && (<ul>{articles}</ul>)}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
