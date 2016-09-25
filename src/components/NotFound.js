import React from 'react';
import Helmet from "react-helmet";

function NotFound() {
  return (
      <div>
        <Helmet title="Not Found"/>
        404
      </div>
  );
}

export default NotFound;