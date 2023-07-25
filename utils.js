const validLang = lang => {
  return lang === 'es' || lang === 'en';
};

const getParams = msg => msg.split(' ');

module.exports = { validLang, getParams };
