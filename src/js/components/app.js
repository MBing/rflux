import React, { Components } from 'react';
import AppActions from '../actions/app-actions';
import AppStore from '../stores/app-store';

export default class App extends Components {
  constructor() {

  }

  onClickHandler() {
    AppActions.addElement('element add');
  }

  render() {
    return (
      <div className="wrapper">
        <h3 onClick={this.onClickHandler}>Open console and Click Here</h3>
      </div>
    )
  }
}
