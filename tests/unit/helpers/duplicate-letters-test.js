import { duplicateLetters } from '../../../helpers/duplicate-letters';
import { module, test } from 'qunit';

module('Unit | Helper | duplicate letters');

// Replace this with your real tests.
test('it works when there are no duplicate letters', function(assert) {
  let result = duplicateLetters(['ab']);

  assert.deepEqual(result, []);
});

test('it works when there is one duplicate letter', function(assert) {
  let result = duplicateLetters(['aba']);

  assert.deepEqual(result, ['a']);
});

test('it works when there is one triple letter', function(assert) {
  let result = duplicateLetters(['abaa']);

  assert.deepEqual(result, ['a']);
});
