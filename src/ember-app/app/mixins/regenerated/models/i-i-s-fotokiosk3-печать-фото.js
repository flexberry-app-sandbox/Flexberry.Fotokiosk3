import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  размер: DS.attr('string'),
  сделатьФото: DS.belongsTo('i-i-s-fotokiosk3-сделать-фото', { inverse: null, async: false })
});

export let ValidationRules = {
  размер: {
    descriptionKey: 'models.i-i-s-fotokiosk3-печать-фото.validations.размер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сделатьФото: {
    descriptionKey: 'models.i-i-s-fotokiosk3-печать-фото.validations.сделатьФото.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПечатьФотоE', 'i-i-s-fotokiosk3-печать-фото', {
    размер: attr('Размер', { index: 0 }),
    сделатьФото: belongsTo('i-i-s-fotokiosk3-сделать-фото', 'Сделать фото', {
      колВоФото: attr('Количество фото', { index: 2, hidden: true }),
      категорФото: attr('Категория фото', { index: 3 }),
      цена: attr('Стоимость', { index: 4 })
    }, { index: 1, displayMemberPath: 'колВоФото' })
  });

  modelClass.defineProjection('ПечатьФотоL', 'i-i-s-fotokiosk3-печать-фото', {
    размер: attr('Размер', { index: 0 }),
    сделатьФото: belongsTo('i-i-s-fotokiosk3-сделать-фото', 'Количество фото', {
      колВоФото: attr('Количество фото', { index: 1 }),
      категорФото: attr('Категория фото', { index: 2 }),
      цена: attr('Стоимость', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
