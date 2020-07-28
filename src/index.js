import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


if (process.env.NODE_ENV !== 'production') {
    import('react-axe').then(axe => {
      axe(React, ReactDOM, 1000);
      ReactDOM.render(<App />, document.getElementById('root'));
    });
  } else {
    ReactDOM.render(<App />, document.getElementById('root'));
  }
registerServiceWorker();