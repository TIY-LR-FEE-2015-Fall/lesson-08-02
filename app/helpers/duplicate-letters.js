import Ember from 'ember';

var firstInstance = function(val, index, arr) {
  // Check if current value is not first occurance in arr
  return arr.indexOf(val) < index;
};

var isUnique = function(val, index, arr) {
  // Check if current value IS the first occurance in arr
  return arr.indexOf(val) === index;
};

export function duplicateLetters(params/*, hash*/) {
  var word = params[0];

  // Turn our word into an array of characters
  var characters = word.split('');

  // Filter down to only duplicate letters
  return characters
    .filter(firstInstance)
    .filter(isUnique);
}

export default Ember.Helper.helper(duplicateLetters);
