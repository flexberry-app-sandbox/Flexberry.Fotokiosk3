import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISFotokiosk3КлиентLForm from './forms/i-i-s-fotokiosk3-клиент-l';
import IISFotokiosk3ОплатаLForm from './forms/i-i-s-fotokiosk3-оплата-l';
import IISFotokiosk3ОтправНаПочтуLForm from './forms/i-i-s-fotokiosk3-отправ-на-почту-l';
import IISFotokiosk3ПечатьФотоLForm from './forms/i-i-s-fotokiosk3-печать-фото-l';
import IISFotokiosk3СделатьФотоLForm from './forms/i-i-s-fotokiosk3-сделать-фото-l';
import IISFotokiosk3КлиентEForm from './forms/i-i-s-fotokiosk3-клиент-e';
import IISFotokiosk3ОплатаEForm from './forms/i-i-s-fotokiosk3-оплата-e';
import IISFotokiosk3ОтправНаПочтуEForm from './forms/i-i-s-fotokiosk3-отправ-на-почту-e';
import IISFotokiosk3ПечатьФотоEForm from './forms/i-i-s-fotokiosk3-печать-фото-e';
import IISFotokiosk3СделатьФотоEForm from './forms/i-i-s-fotokiosk3-сделать-фото-e';
import IISFotokiosk3ДопНастройкиModel from './models/i-i-s-fotokiosk3-доп-настройки';
import IISFotokiosk3КлиентModel from './models/i-i-s-fotokiosk3-клиент';
import IISFotokiosk3ОплатаModel from './models/i-i-s-fotokiosk3-оплата';
import IISFotokiosk3ОтправНаПочтуModel from './models/i-i-s-fotokiosk3-отправ-на-почту';
import IISFotokiosk3ПечатьФотоModel from './models/i-i-s-fotokiosk3-печать-фото';
import IISFotokiosk3СделатьФотоModel from './models/i-i-s-fotokiosk3-сделать-фото';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-fotokiosk3-доп-настройки': IISFotokiosk3ДопНастройкиModel,
    'i-i-s-fotokiosk3-клиент': IISFotokiosk3КлиентModel,
    'i-i-s-fotokiosk3-оплата': IISFotokiosk3ОплатаModel,
    'i-i-s-fotokiosk3-отправ-на-почту': IISFotokiosk3ОтправНаПочтуModel,
    'i-i-s-fotokiosk3-печать-фото': IISFotokiosk3ПечатьФотоModel,
    'i-i-s-fotokiosk3-сделать-фото': IISFotokiosk3СделатьФотоModel
  },

  'application-name': 'Fotokiosk3',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Fotokiosk3',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Fotokiosk3',
          title: 'Fotokiosk3'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        fotokiosk3: {
          caption: 'Fotokiosk3',
          title: 'Fotokiosk3',
          'i-i-s-fotokiosk3-оплата-l': {
            caption: 'Оплата',
            title: ''
          },
          'i-i-s-fotokiosk3-сделать-фото-l': {
            caption: 'Сделать фото',
            title: ''
          },
          'i-i-s-fotokiosk3-печать-фото-l': {
            caption: 'Печать фото',
            title: ''
          },
          'i-i-s-fotokiosk3-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-fotokiosk3-отправ-на-почту-l': {
            caption: 'Отправ на почту',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-fotokiosk3-клиент-l': IISFotokiosk3КлиентLForm,
    'i-i-s-fotokiosk3-оплата-l': IISFotokiosk3ОплатаLForm,
    'i-i-s-fotokiosk3-отправ-на-почту-l': IISFotokiosk3ОтправНаПочтуLForm,
    'i-i-s-fotokiosk3-печать-фото-l': IISFotokiosk3ПечатьФотоLForm,
    'i-i-s-fotokiosk3-сделать-фото-l': IISFotokiosk3СделатьФотоLForm,
    'i-i-s-fotokiosk3-клиент-e': IISFotokiosk3КлиентEForm,
    'i-i-s-fotokiosk3-оплата-e': IISFotokiosk3ОплатаEForm,
    'i-i-s-fotokiosk3-отправ-на-почту-e': IISFotokiosk3ОтправНаПочтуEForm,
    'i-i-s-fotokiosk3-печать-фото-e': IISFotokiosk3ПечатьФотоEForm,
    'i-i-s-fotokiosk3-сделать-фото-e': IISFotokiosk3СделатьФотоEForm
  },

});

export default translations;
