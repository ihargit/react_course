import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default () => {
  return ReactDOM.render(
    React.createElement('p', null, 'Hello World, CreateElement!'),
    document.getElementById('root')
  )
}