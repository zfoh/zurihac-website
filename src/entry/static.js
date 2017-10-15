import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Page from '../page';

const shareImageUrl = require('../../static/share-image.jpg')

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

                <title>ZuriHac 2018</title>

                <link rel="shortcut icon" href={require('../../static/favicon.ico')} />
                <link href="https://fonts.googleapis.com/css?family=Lora|Raleway:400,500" rel="stylesheet" />
                <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.31.0/mapbox-gl.css' rel='stylesheet' />

                <link href={'https://zurihac.info/' + cssFiles[0]} rel='stylesheet' />

                <meta name="twitter:card"        content="summary_large_image" />
                <meta name="twitter:site"        content="@zurihac" />
                <meta name="twitter:creator"     content="@wereHamster" />
                <meta name="twitter:title"       content="ZuriHac 2018" />
                <meta name="twitter:image"       content={shareImageUrl} />
                <meta name="twitter:description" ontent="The Haskell Hackathon is an international, grassroots collaborative coding festival whose goal is to expand the community and to build and improve Haskell libraries, tools, and infrastructure." />

                <meta property="og:url"          content="https://zurihac.info"/>
                <meta property="og:type"         content="article" />
                <meta property="og:title"        content="ZuriHac 2018" />
                <meta property="og:image"        content={shareImageUrl} />
                <meta property="og:description"  content="The Haskell Hackathon is an international, grassroots collaborative coding festival whose goal is to expand the community and to build and improve Haskell libraries, tools, and infrastructure." />
            </head>
            <body>
                <Page />

                <script defer src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.31.0/mapbox-gl.js'></script>
                <script defer src={locals.assets.main} />
            </body>
      </html>
    );
};
