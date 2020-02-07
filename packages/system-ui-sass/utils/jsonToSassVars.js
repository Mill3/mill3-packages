'use strict';

module.exports = function(obj) {

  function jsonToSassVars(obj) {
    // Make object root properties into sass variables
    let sassString = '';

    Object.keys(obj).forEach(key => {
      const val = JSON.stringify(obj[key], null);
      sassString += `'$${key}':${val};\n`;
    });

    if (!sassString) {
      return sassString;
    }

    // Store string values (so they remain unaffected)
    const storedStrings = [];
    sassString = sassString.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, function (str) {
      const id = '___JTS' + storedStrings.length;
      storedStrings.push({ id: id, value: str });
      return id;
    });

    // Convert js lists and objects into sass lists and maps
    sassString = sassString.replace(/[{\[]/g, '(').replace(/[}\]]/g, ')');

    // Put string values back (now that we're done converting)
    storedStrings.forEach(function (str) {
      str.value = str.value.replace(/["']/g, '');
      sassString = sassString.replace(str.id, str.value);
    });

    // console.log(sassString);

    return sassString;
  }

  return jsonToSassVars(obj)

}
