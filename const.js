const COMMANDS = {
  BASE: "!",
  STICKER: { command: "!sticker", reaction: "✂️" },
  INFO: { command: "!info", reaction: "💡" },
  GITHUB: { command: "!gh", reaction: "📓" },
  // TRANSLATOR: { command: "!translate", reaction: "✏️" },
  WEATHER: { command: "!wet", reaction: "🌦️" },
  GOOGLE: { command: "!search", reaction: "🔍" },
  SUMMARIZE: { command: "!sumz", reaction: "📑" },
  SUMMARIZEURL: { command: "!sumzUrl", reaction: "📑" },
  DICE: { command: "!dice", reaction: "🎲" },
  COIN: { command: "!coin", reaction: "🪙" },
  OPERATION: {
    ADDITION: { command: "!add" },
    SUBSTRACTION: { command: "!subs" },
    MULTIPLICATION: { command: "!mult" },
    DIVISION: { command: "!div" },
    reaction: "🧮",
  },
  YOUTUBE: { command: "!yt", reaction: "📽️" },
  COTIZACION: { command: "!price", reaction: "💰" },
};

/* 
${COMMANDS.TRANSLATOR.reaction} ${COMMANDS.TRANSLATOR.command}
Reply to a message to be translated and add the target language.
Ex: !translate Hello es
!translate Hola en
Options: es, en.
 */

const INFORMATION = {
  title: "🛠️ Lista de comandos.\n",
  body: `${COMMANDS.STICKER.reaction} ${COMMANDS.STICKER.command}
Contesta a una imagen con !sticker para convertirla a sticker.
  
${COMMANDS.COTIZACION.reaction} ${COMMANDS.COTIZACION.command}
Obten la cotización del Dólar, Euro, Real y Peso Argetino.

${COMMANDS.GITHUB.reaction} ${COMMANDS.GITHUB.command}
Obten el perfil de Github de un usuario.
Ej: !gh JonDoe.

${COMMANDS.WEATHER.reaction} ${COMMANDS.WEATHER.command}
Obten información del tiempo atmosférico de una ciudad.
Ej: !wet New York.

${COMMANDS.GOOGLE.reaction} ${COMMANDS.GOOGLE.command}
Realiza una busqueda en Google.
Ej: !search que es nodejs.

${COMMANDS.YOUTUBE.reaction} ${COMMANDS.YOUTUBE.command}
Realiza una busqueda en Youtube.
Ej: !yt calculadora con javascript.

${COMMANDS.SUMMARIZE.reaction} ${COMMANDS.SUMMARIZE.command} or ${COMMANDS.SUMMARIZEURL.command}
Ingresa un texto largo o URL y obten un resúmen.
Ej: !sumz texto largo aquí.
!sumzUrl URL aquí.

${COMMANDS.DICE.reaction} ${COMMANDS.DICE.command}
Tira un dado.

${COMMANDS.COIN.reaction} ${COMMANDS.COIN.command}
Tira una moneda.

${COMMANDS.OPERATION.reaction} CALCULADORA
!add: ingresa 2 o más números para ser sumados.
!subs: ingresa 2 o más números para ser restados.
!mult: ingresa 2 o más números para ser multiplicados.
!div: ingresa 2 o más números para ser divididos.

${COMMANDS.INFO.reaction} ${COMMANDS.INFO.command}
Obten la lista de comandos y una descripción de los mismos.`,
};

const STICKER_INFO = {
  AUTHOR: "By GSM",
  NAME: "Sticker",
  CATEGORIES: "St",
};

module.exports = { COMMANDS, INFORMATION, STICKER_INFO };
