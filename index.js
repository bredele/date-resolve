

module.exports = time => {
  return typeof time === 'number' ? time : Date.parse(time)
}
