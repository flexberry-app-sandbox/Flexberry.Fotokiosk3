import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  категорФото: DS.attr('i-i-s-fotokiosk3-категория'),
  колВоФото: DS.attr('number'),
  цена: DS.attr('number'),
  допНастройки: DS.hasMany('i-i-s-fotokiosk3-доп-настройки', { inverse: 'сделатьФото', async: false })
});

export let ValidationRules = {
  категорФото: {
    descriptionKey: 'models.i-i-s-fotokiosk3-сделать-фото.validations.категорФото.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  колВоФото: {
    descriptionKey: 'models.i-i-s-fotokiosk3-сделать-фото.validations.колВоФото.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-fotokiosk3-сделать-фото.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  допНастройки: {
    descriptionKey: 'models.i-i-s-fotokiosk3-сделать-фото.validations.допНастройки.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СделатьФотоE', 'i-i-s-fotokiosk3-сделать-фото', {
    колВоФото: attr('Кол во фото', { index: 0 }),
    категорФото: attr('Категор фото', { index: 1 }),
    цена: attr('Цена', { index: 2 }),
    допНастройки: hasMany('i-i-s-fotokiosk3-доп-настройки', 'Доп настройки', {
      уголок: attr('Уголок', { index: 0 }),
      чбЦвет: attr('Чб цвет', { index: 1 })
    })
  });

  modelClass.defineProjection('СделатьФотоL', 'i-i-s-fotokiosk3-сделать-фото', {
    колВоФото: attr('Кол во фото', { index: 0 }),
    категорФото: attr('Категор фото', { index: 1 }),
    цена: attr('Цена', { index: 2 })
  });
};
