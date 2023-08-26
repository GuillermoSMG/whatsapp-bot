const { MessageTypes } = require("whatsapp-web.js");
const { COMMANDS } = require("./const");
const {
  generateSticker,
  getInfo,
  getGithub,
  getWeather,
  getGoogle,
  getSummarize,
  getSummarizeUrl,
  getDice,
  getCoin,
  getEval,
  getYoutube,
  getCotizacion,
} = require("./functions");

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

  /* if (command === COMMANDS.TRANSLATOR.command) {
    msg.react(COMMANDS.TRANSLATOR.reaction);
    await getTranslation(msg);
  } */

  if (command === COMMANDS.WEATHER.command) {
    msg.react(COMMANDS.WEATHER.reaction);
    await getWeather(msg);
  }

  if (command === COMMANDS.GOOGLE.command) {
    msg.react(COMMANDS.GOOGLE.reaction);
    await getGoogle(msg);
  }

  if (command === COMMANDS.SUMMARIZE.command) {
    msg.react(COMMANDS.SUMMARIZE.reaction);
    await getSummarize(msg);
  }

  if (command === COMMANDS.SUMMARIZEURL.command) {
    msg.react(COMMANDS.SUMMARIZEURL.reaction);
    await getSummarizeUrl(msg);
  }

  if (command === COMMANDS.DICE.command) {
    msg.react(COMMANDS.DICE.reaction);
    await getDice(msg);
  }

  if (command === COMMANDS.COIN.command) {
    msg.react(COMMANDS.COIN.reaction);
    await getCoin(msg);
  }

  if (
    command === COMMANDS.OPERATION.ADDITION.command ||
    command === COMMANDS.OPERATION.SUBSTRACTION.command ||
    command === COMMANDS.OPERATION.MULTIPLICATION.command ||
    command === COMMANDS.OPERATION.DIVISION.command
  ) {
    msg.react(COMMANDS.OPERATION.reaction);
    await getEval(msg);
  }

  if (command === COMMANDS.YOUTUBE.command) {
    msg.react(COMMANDS.YOUTUBE.reaction);
    await getYoutube(msg);
  }

  if (command === COMMANDS.COTIZACION.command) {
    msg.react(COMMANDS.COTIZACION.reaction);
    await getCotizacion(msg);
  }
};

module.exports = { handleMessage };
