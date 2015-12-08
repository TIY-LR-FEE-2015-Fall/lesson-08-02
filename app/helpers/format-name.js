import Ember from 'ember';

export function formatName(params/*, hash*/) {
  var person = params[0];

  return `${person.lastName}, ${person.firstName}`;
}

export default Ember.Helper.helper(formatName);
