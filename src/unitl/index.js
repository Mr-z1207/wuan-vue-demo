var moment = require('moment');

export const momentUnitl = (date) => {
  return moment(date).format('YY-MM-DD HH:mm')
}
