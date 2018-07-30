import { Switch } from 'react-router';
const { connect } = require('react-redux');

export const ConnectedSwitch = connect(state => ({
  location: null,
}))(Switch);
