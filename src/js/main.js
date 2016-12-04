import React, { Components } from 'react';
import App from 'components/app';

export default class MainApp extends Components {
  constructor() {

  }

  render() {
    return (
      <App />,
      document.getElementById('main')
    )
  }
}
