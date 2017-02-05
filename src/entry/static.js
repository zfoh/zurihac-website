import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Page from '../page';

module.exports = function(locals) {
    const cssFiles = [];
    locals.webpackStats.compilation.chunks.forEach(chunk => {
        chunk.files.forEach(file => {
            if (file.match(/.css$/)) {
                cssFiles.push(file);
            }
        });
    });

    return '<!DOCTYPE html>' + ReactDOMServer.renderToStaticMarkup(
        <html>
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <title>Zurihac 2017</title>

                <link rel="shortcut icon" href={require('../../static/favicon.ico')} />
                <link href="https://fonts.googleapis.com/css?family=Lora|Raleway:400,500" rel="stylesheet" />
                <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.31.0/mapbox-gl.css' rel='stylesheet' />

                <link href={'https://zurihac.info/' + cssFiles[0]} rel='stylesheet' />
            </head>
            <body>
                <Page />

                <script defer src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.31.0/mapbox-gl.js'></script>
                <script defer src={locals.assets.main} />
            </body>
      </html>
    );
};
