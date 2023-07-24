const { MessageTypes } = require('whatsapp-web.js');
const { COMMANDS } = require('./const');
const {
  generateSticker,
  getInfo,
  getGithub,
  getTranslation,
  getWeather,
} = require('./functions');

const handleMessage = async (command, msg) => {
  if (
    command === COMMANDS.STICKER.command &&
    msg._data.quotedMsg?.type === MessageTypes.IMAGE
  ) {
    msg.react(COMMANDS.STICKER.reaction);
    await generateSticker(msg);
  }

  if (command === COMMANDS.INFO.command) {
    msg.react(COMMANDS.INFO.reaction);
    getInfo(msg);
  }

  if (command === COMMANDS.GITHUB.command) {
    msg.react(COMMANDS.GITHUB.reaction);
    await getGithub(msg);
  }

  if (command === COMMANDS.TRANSLATOR.command) {
    msg.react(COMMANDS.TRANSLATOR.reaction);
    await getTranslation(msg);
  }

  if (command === COMMANDS.WEATHER.command) {
    msg.react(COMMANDS.WEATHER.reaction);
    await getWeather(msg);
  }
};

module.exports = { handleMessage };
