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
  EVAL: { command: "!eval", reaction: "🧮" },
};

/* 
${COMMANDS.TRANSLATOR.reaction} ${COMMANDS.TRANSLATOR.command}
Reply to a message to be translated and add the target language.
Ex: !translate Hello es
!translate Hola en
Options: es, en.
 */

const INFORMATION = {
  title: "🛠️ Commands list.\n",
  body: `${COMMANDS.STICKER.reaction} ${COMMANDS.STICKER.command}
Reply an image with !sticker to get the image sticker.
  
${COMMANDS.GITHUB.reaction} ${COMMANDS.GITHUB.command}
Get a Github user info.
Ex: !gh JonDoe

${COMMANDS.WEATHER.reaction} ${COMMANDS.WEATHER.command}
Get information about a city weather at this moment.
Ex: !wet New York

${COMMANDS.GOOGLE.reaction} ${COMMANDS.GOOGLE.command}
Make a Google search.
Ex: !search whats nodejs

${COMMANDS.SUMMARIZE.reaction} ${COMMANDS.SUMMARIZE.command} or ${COMMANDS.SUMMARIZEURL.command}
Enter a long text or an URL and get a summarized version.
Ex: !sumz long text here
!sumzUrl URL here

${COMMANDS.DICE.reaction} ${COMMANDS.DICE.command}
Roll a dice

${COMMANDS.COIN.reaction} ${COMMANDS.COIN.command}
Flip a coin

${COMMANDS.INFO.reaction} ${COMMANDS.INFO.command}
Get a list of commands and description of each one.`,
};

module.exports = { COMMANDS, INFORMATION };
