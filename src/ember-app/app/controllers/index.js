import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.fotokiosk3.caption'),
          title: i18n.t('forms.application.sitemap.fotokiosk3.title'),
          children: [{
            link: 'i-i-s-fotokiosk3-оплата-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk3.i-i-s-fotokiosk3-оплата-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk3.i-i-s-fotokiosk3-оплата-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-fotokiosk3-сделать-фото-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk3.i-i-s-fotokiosk3-сделать-фото-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk3.i-i-s-fotokiosk3-сделать-фото-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-fotokiosk3-печать-фото-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk3.i-i-s-fotokiosk3-печать-фото-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk3.i-i-s-fotokiosk3-печать-фото-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-fotokiosk3-клиент-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk3.i-i-s-fotokiosk3-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk3.i-i-s-fotokiosk3-клиент-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-fotokiosk3-отправ-на-почту-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk3.i-i-s-fotokiosk3-отправ-на-почту-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk3.i-i-s-fotokiosk3-отправ-на-почту-l.title'),
            children: null
          }]
        }
      ]
    };
  }),
})