import React from 'react';
import ReactDOM from 'react-dom';

import Interface from 'containers/Interface';

ReactDOM.render(<Interface />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
