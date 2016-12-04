import AppDispatcher from '../dispatcher/app-dispatcher';
import AppConstants from '../constants/app-constants';

export default class AppActions {
  constructor() {

  }

  addElement(param) {
    AppDispatcher.handleAction({
      actionType: AppConstants.ADD_ELEMENT,
      description: param
    })
  }
}
