import React from 'react';
import Helmet from "react-helmet";

import Greeting from './Greeting';

function Home() {
  return (
      <div>
        <Helmet title="Home"/>
        <Greeting userName='BETLAB'/>
      </div>
  );
}

export default Home;