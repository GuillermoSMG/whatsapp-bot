const { RAPID_API_KEY, WEATHER_API_KEY } = require('./config');
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
  const [, user] = getParams(msg.body);
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
  const [, lang] = getParams(msg.body);
  const validated = validLang(lang);
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': RAPID_API_KEY,
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
  const [...city] = getParams(msg.body);
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
  } catch (error) {
    console.log(error);
    msg.reply('Ingrese una ciudad válida.');
  }
};

const getGoogle = async msg => {
  const [, ...params] = getParams(msg.body);
  const searchTerm = params.join(' ');

  const url = `${URLS.GOOGLE}/?query=${searchTerm}&limit=5&related_keywords=true`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': 'google-search74.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const resMsg = result.results.map(r => {
      const newMsg = `${r.title}
${r.url}`;
      return newMsg;
    });
    msg.reply(`${resMsg[0]}\n
${resMsg[1]}\n
${resMsg[2]}\n
${resMsg[3]}\n
${resMsg[4]}`);
  } catch (error) {
    console.error(error);
    msg.reply('Ocurrió un error');
  }
};

const getSummarize = async msg => {
  const [, ...params] = getParams(msg.body);
  const text = params.join(' ');
  const url = `${URLS.SUMMARIZE}Text`
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': 'text-summarize-pro.p.rapidapi.com',
    },
    body: new URLSearchParams({
      text,
      percentage: '15',
    }),
  };

  if (!text) {
    msg.reply('Debes ingresar un texto válido.');
  } else {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      msg.reply(`Text summary:\n${result.summary}`);
    } catch (error) {
      console.error(error);
      msg.reply('Ocurrió un error.');
    }
  }
};

const getSummarizeUrl = async msg => {
  const [, params] = getParams(msg.body);
  const sendedUrl = params;
  const url = `${URLS.SUMMARIZE}Url`
  const encodedParams = new URLSearchParams();
  encodedParams.set('url', sendedUrl);
  encodedParams.set('percentage', '10');

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': 'text-summarize-pro.p.rapidapi.com'
    },
    body: encodedParams
  };


  if (!sendedUrl) {
    msg.reply('Debes ingresar un URL válido.');
  } else {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      msg.reply(`URL summary:\n${result.summary}`);
    } catch (error) {
      console.error(error);
      msg.reply('Ocurrió un error.');
    }
  }
};

module.exports = {
  generateSticker,
  getInfo,
  getGithub,
  getTranslation,
  getWeather,
  getGoogle,
  getSummarize,
  getSummarizeUrl,
};
