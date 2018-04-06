
/**
 * Parse given time into a date in ms.
 *
 * @param {Date|Number|String} time
 * @return {Number}
 * @api private
 */
 
module.exports = time => {
  return typeof time === 'number' ? time : Date.parse(time)
}
