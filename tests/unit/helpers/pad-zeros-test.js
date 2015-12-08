import { padZeros } from '../../../helpers/pad-zeros';
import { module, test } from 'qunit';

module('Unit | Helper | pad zeros');

// Replace this with your real tests.
test('it works with two digit numbers', function(assert) {
  let result = padZeros([10]);

  assert.strictEqual(result, 10);
});

test('it works with one digit numbers', function(assert) {
  let result = padZeros([1]);

  assert.strictEqual(result, '01');
});
