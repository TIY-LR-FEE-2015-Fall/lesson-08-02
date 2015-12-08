import Ember from 'ember';

export function padZeros(params/*, hash*/) {
  var num = params[0];

  if (num < 10) {
    return '0' + num;
  }

  return num;
}

export default Ember.Helper.helper(padZeros);
