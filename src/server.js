import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerRouter, createServerRenderContext } from 'react-router'
import Helmet from "react-helmet";

import App from './components/App';

const app = express();

app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));
app.use((request, response) => {
  const context = createServerRenderContext();

  const html = renderToString(
      <ServerRouter location={request.url} context={context}>
        <App/>
      </ServerRouter>
  );

  const head = Helmet.rewind();

  response.send(renderFullPage(head, html));
});

function renderFullPage(head, html) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      ${head.title.toString()}
    </head>
    <body>
      <div id="container">${html}</div>
      <script src="/dist/bundle.js"></script>
    </body>
    </html>
    `;
}

app.listen(8000);
