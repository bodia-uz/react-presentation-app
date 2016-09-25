import React from 'react';
import { Match, Miss, Link } from 'react-router'

import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import Greeting from './Greeting';

function App() {
  return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/greet/igamingfeature">Greet Someone</Link></li>
        </ul>

        <Match exactly pattern="/" component={Home} />
        <Match pattern="/about" component={About} />
        <Match pattern="/greet/:userName" render={({params}) => <Greeting userName={params.userName}/>} />

        {/* If none of those match, then a sibling `Miss` will render. */}
        <Miss component={NotFound}/>
      </div>
  );
}

export default App;
