import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  allergens: DS.attr(),

  hasGluten: Ember.computed('allergens.[]', function() {
    return this.get('allergens').indexOf('wheat') > 0;
  }),
});
