const { Command } = require('discord-akairo');
const { CreateEmbed } = require('../../Utility/CreateEmbed');

module.exports = class PingCommand extends Command {
  constructor() {
    super('ping', {
      aliases: ['ping'],
      description: {
        content: 'Gets the bot\'s heartbeat and latency',
      },
      category: 'Util',
      cooldown: 3000,
    });
  }

  async exec(msg) {
    try {
      const message = await msg.channel.send({ embeds: [CreateEmbed('error', 'Getting information.')] });
      const message1 = CreateEmbed('warn')
        .setDescription('Getting information..')
      const message2 = CreateEmbed('green')
        .setDescription('Getting information..')
      const embed = CreateEmbed('info')
        .setDescription(`${Math.floor(this.client.ws.ping)}ms`)
      setTimeout(() => { message.edit({ content: null, embeds: [message1] }); }, 1000);
      setTimeout(() => { message.edit({ content: null, embeds: [message2] }); }, 3000);
      setTimeout(() => { message.edit({ content: null, embeds: [embed] }); }, 5000);
      
    } catch (e) {
      this.client.logger.error(e.message);
      return msg.channel.send({ embeds: [CreateEmbed('warn', '⛔ | An error occured')] });
    }
  }
};

// async exec(msg) {
//   try {
//     const message = CreateEmbed('info')
//     .setDescription(`Getting Information...`)
//     const embed = CreateEmbed('info')
//       .setDescription(`${Math.floor(this.client.ws.ping)}ms`)
//     setTimeout(() => { message.edit({ content: null, embeds: [embed] }); }, 5000);
//   } catch (e) {
//     this.client.logger.error(e.message);
//     return msg.channel.send({ embeds: [CreateEmbed('warn', '⛔ | An error occured')] });
//   }
// }
// };



// async exec(msg) {
//   try {
//     const message = await msg.channel.send('Getting info...');
//     const embed = CreateEmbed('info')
//       .setDescription(`${Math.floor(this.client.ws.ping)}ms`)
//     setTimeout(() => { message.edit({ content: null, embeds: [embed] }); }, 5000);
//   } catch (e) {
//     this.client.logger.error(e.message);
//     return msg.channel.send({ embeds: [CreateEmbed('warn', '⛔ | An error occured')] });
//   }
// }
// };