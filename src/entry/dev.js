import React from 'react';
import ReactDOM from 'react-dom';

import Page from '../page';

ReactDOM.render(<Page />, document.getElementById('root'), () => {
    require('../../static/lazysizes.min.js');
    require('../../static/main.js');
});
