function convertHTML(str) {
  let result = str;

  for (let index = 0; index < str.length; index++) {
    if (str[index] == '&') {
      result = result.replace(/&/g, '&amp;');
    }

    if (str[index] == '"') {
      result = result.replace(/"/g, '&quot;');
    }

    if (str[index] == '<') {
      result = result.replace(/</g, '&lt;');
    }

    if (str[index] == '>') {
      result = result.replace(/>/g, '&gt;');
    }

    if (str[index] == "'") {
      result = result.replace(/'/g, '&apos;');
    }
  }
  return result;
}

module.exports = convertHTML;
