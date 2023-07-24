const { RAPID_API_TRANSLATE_KEY, WEATHER_API_KEY } = require('./config');
const { INFORMATION } = require('./const');
const { URLS } = require('./urls');
const { validLang, getParams } = require('./utils');

const generateSticker = async msg => {
  const quotedMsg = await msg.getQuotedMessage();

  try {
    const mediaObj = await quotedMsg.downloadMedia();
    quotedMsg.reply(mediaObj, undefined, {
      sendMediaAsSticker: true,
      stickerAuthor: 'By GSM',
      stickerName: 'Sticker',
      stickerCategories: ['St'],
    });
  } catch (err) {
    quotedMsg.reply('Debes responder a una imagen.');
    console.log(err);
  }
};

const getInfo = msg => {
  msg.reply(`${INFORMATION.title}\n${INFORMATION.body}`);
};

const getGithub = async msg => {
  const [, user] = getParams(msg);
  try {
    const dataGh = await fetch(`${URLS.GITHUB}/${user}`);
    const dataGhJson = await dataGh.json();
    if (dataGhJson.message) {
      msg.reply('Debe ingresar un usuario válido.');
    } else {
      msg.reply(`User: ${dataGhJson.login}
  Profile: ${dataGhJson.html_url}
  Repos: ${dataGhJson.html_url}?tab=repositories`);
    }
  } catch (err) {
    msg.reply('Ocurrió un error.');
    console.log(err);
  }
};

const getTranslation = async msg => {
  const url = URLS.TRANSLATION;
  const quotedMsg = (await msg.getQuotedMessage()) ?? '';
  console.log(quotedMsg.body);
  const [, lang] = getParams(msg);
  const validated = validLang(lang);
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': RAPID_API_TRANSLATE_KEY,
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    },
    body: new URLSearchParams({
      q: quotedMsg.body,
      target: lang === 'en' ? 'en' : 'es',
      source: lang === 'en' ? 'es' : 'en',
    }),
  };

  if (validated) {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      msg.reply(`Translation: ${result.data?.translations[0]?.translatedText}`);
      console.log(result);
    } catch (error) {
      msg.reply('Ocurrió un error');
      console.error(error);
    }
  } else {
    msg.reply(`Debes ingresar un lenguaje válido. Ej: es, en.`);
  }
};

const getWeather = async msg => {
  // Get message body part by part. Ex: !wet New York -> ['!wet', 'New', 'York']
  const [...city] = getParams(msg);
  // Delete first index -> ['New', 'York']
  city.shift();
  // Transform to string ->  'New York'
  const cityName = city.join(' ');

  try {
    const dataW = await fetch(
      `${URLS.WEATHER}?q=${cityName}&appid=${WEATHER_API_KEY}&units=metric&lang=sp`
    );
    const dataWJson = await dataW.json();
    msg.reply(`${dataWJson.name}, ${dataWJson.sys.country}
${Math.round(dataWJson.main.temp)}°C
${dataWJson.weather[0].description}`);
    console.log(dataWJson);
  } catch (error) {
    console.log(error);
    msg.reply('Ingrese una ciudad válida.');
  }
};

module.exports = {
  generateSticker,
  getInfo,
  getGithub,
  getTranslation,
  getWeather,
};
