import { formatName } from '../../../helpers/format-name';
import { module, test } from 'qunit';

module('Unit | Helper | format name');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = formatName([
    {firstName: 'Tom', lastName: 'Dale'},
  ]);
  assert.equal(result, 'Dale, Tom');
});
