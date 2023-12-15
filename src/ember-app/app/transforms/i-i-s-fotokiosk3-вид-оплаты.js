import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВидОплатыEnum from '../enums/i-i-s-fotokiosk3-вид-оплаты';

export default FlexberryEnum.extend({
  enum: ВидОплатыEnum,
  sourceType: 'IIS.Fotokiosk3.ВидОплаты'
});
