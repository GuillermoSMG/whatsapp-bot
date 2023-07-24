const validLang = lang => {
  return lang === 'es' || lang === 'en';
};

const getParams = msg => msg.body.split(' ');

module.exports = { validLang, getParams };
