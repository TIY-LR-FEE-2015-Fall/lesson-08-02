import { moduleForModel, test } from 'ember-qunit';

moduleForModel('pizza', 'Unit | Model | pizza', {
  // Specify the other units that are required for this test.
  needs: [],
});

test('it can create a model with allergens', function(assert) {
  let model = this.subject({allergens: ['peanuts']});

  assert.deepEqual(model.get('allergens'), ['peanuts']);
});

test('it can tell if there a pizza is gluten free', function(assert) {
  let model = this.subject({allergens: ['peanuts']});

  assert.strictEqual(model.get('hasGluten'), false);
});

test('it can tell if there is gluten in a pizza', function(assert) {
  let model = this.subject({allergens: ['wheat', 'peanuts', 'dairy']});

  assert.strictEqual(model.get('hasGluten'), true);
});

test('it can tell if there is gluten in a pizza after new toppings are added', function(assert) {
  let model = this.subject({allergens: ['peanuts']});

  assert.strictEqual(model.get('hasGluten'), false);

  model.get('allergens').pushObject('wheat');

  assert.strictEqual(model.get('hasGluten'), true);
});
