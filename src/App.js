import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/header/header';
import Main from './components/main/main';
import About from './components/about/about';
import Projects from './components/projects/projects';
import CV from './components/cv/cv';

import background from './assets/blue-bg.jpg';

class App extends Component {

  render() {
    return (
      <div style = {{ backgroundImage: `url(${background})`, 
                      backgroundSize: 'cover', 
                      backgroundPosition: 'center center',
                      backgroundRepeat: 'no-repeat'
                    }}>
        <header>
          <Header />
        </header>

        <Route exact path="/" component={Main}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/cv" component={CV}/>
      </div>
    );
  }
}

export default App;
