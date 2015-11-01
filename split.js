var token = '//-----------------------------------------------------------------------------\r\n'

module.exports = function(what){
  what.splitted = what.source.split(token);
  return what
}