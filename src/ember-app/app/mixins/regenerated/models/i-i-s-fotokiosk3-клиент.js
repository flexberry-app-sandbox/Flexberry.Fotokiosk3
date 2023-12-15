import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  оплата: DS.belongsTo('i-i-s-fotokiosk3-оплата', { inverse: null, async: false }),
  отправНаПочту: DS.belongsTo('i-i-s-fotokiosk3-отправ-на-почту', { inverse: null, async: false })
});

export let ValidationRules = {
  оплата: {
    descriptionKey: 'models.i-i-s-fotokiosk3-клиент.validations.оплата.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отправНаПочту: {
    descriptionKey: 'models.i-i-s-fotokiosk3-клиент.validations.отправНаПочту.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-fotokiosk3-клиент', {
    отправНаПочту: belongsTo('i-i-s-fotokiosk3-отправ-на-почту', 'ФИО', {
      фИО: attr('ФИО', { index: 0, hidden: true })
    }, { index: -1, hidden: true }),
    оплата: belongsTo('i-i-s-fotokiosk3-оплата', 'Оплата', {
      дата: attr('Дата оплаты', { index: 2 }),
      время: attr('Время оплаты', { index: 3, hidden: true }),
      способОпл: attr('Способ оплаты', { index: 4 }),
      сумма: attr('Сумма', { index: 5 })
    }, { index: 1, displayMemberPath: 'время' })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-fotokiosk3-клиент', {
    отправНаПочту: belongsTo('i-i-s-fotokiosk3-отправ-на-почту', 'ФИО', {
      фИО: attr('ФИО', { index: 0 })
    }, { index: -1, hidden: true }),
    оплата: belongsTo('i-i-s-fotokiosk3-оплата', 'Дата оплаты', {
      дата: attr('Дата оплаты', { index: 1 }),
      время: attr('Время оплаты', { index: 2 }),
      способОпл: attr('Способ оплаты', { index: 3 }),
      сумма: attr('Сумма', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
