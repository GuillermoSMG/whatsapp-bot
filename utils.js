const validLang = lang => {
  return lang === 'es' || lang === 'en';
};

const getParams = msg => msg.split(' ');

const URL_REGEX = `https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)`

module.exports = { validLang, getParams, URL_REGEX };
