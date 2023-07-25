const qrcode = require('qrcode-terminal');
const { Client, LocalAuth, Events } = require('whatsapp-web.js');

const { handleMessage } = require('./handleMessage');
const { COMMANDS } = require('./const');

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on(Events.QR_RECEIVED, qr => {
  qrcode.generate(qr, { small: true });
});

client.on(Events.READY, () => {
  console.log('Client is ready!');
});

client.on(Events.MESSAGE_CREATE, async msg => {
  let command;
  if (msg.body.startsWith(COMMANDS.BASE)) {
    command = msg.body.split(' ')[0];
  }

  await handleMessage(command, msg);
});

client.initialize();
