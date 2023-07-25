const COMMANDS = {
  BASE: '!',
  STICKER: { command: '!sticker', reaction: '✂️' },
  INFO: { command: '!info', reaction: '💡' },
  GITHUB: { command: '!gh', reaction: '📓' },
  TRANSLATOR: { command: '!translate', reaction: '✏️' },
  WEATHER: { command: '!wet', reaction: '🌦️' },
  GOOGLE: { command: '!search', reaction: '🔍' },
  SUMMARIZE: { command: '!sumz', reaction: '📑' },
};

const INFORMATION = {
  title: '🛠️ Commands list.\n',
  body: `${COMMANDS.STICKER.reaction} ${COMMANDS.STICKER.command}
Reply an image with !sticker to get the image sticker.
  
${COMMANDS.GITHUB.reaction} ${COMMANDS.GITHUB.command}
Get a Github user info.
Ex: !gh JonDoe

${COMMANDS.TRANSLATOR.reaction} ${COMMANDS.TRANSLATOR.command}
Reply to a message to be translated and add the target language.
Ex: !translate Hello es
!translate Hola en
Options: es, en.

${COMMANDS.WEATHER.reaction} ${COMMANDS.WEATHER.command}
Get information about a city weather at this moment.
Ex: !wet New York

${COMMANDS.GOOGLE.reaction} ${COMMANDS.GOOGLE.command}
Make a Google search.
Ex: !search whats nodejs

${COMMANDS.SUMMARIZE.reaction} ${COMMANDS.SUMMARIZE.command}
Enter a long text and get a summarized version.
Ex: !sumz long text here

${COMMANDS.INFO.reaction} ${COMMANDS.INFO.command}
Get a list of commands and description of each one.`,
};

module.exports = { COMMANDS, INFORMATION };
