/* eslint no-restricted-syntax: "off" */
const { Command } = require('discord-akairo');
const { CreateEmbed } = require('../../Utility/CreateEmbed');

module.exports = class PingCommand extends Command {
  constructor() {
    super('help', {
      aliases: ['help'],
      description: {
        content: 'Gets the bot\'s help command',
      },
      category: 'Util',
      cooldown: 3000,
      args: [
        {
          id: 'command',
          type: 'commandAlias',
        },
      ],
    });
  }



  async exec(msg, { command }) {
    try {
      if (!command) {
        const embed = CreateEmbed('green')
          .setTitle('Agent Peko-Chan is here!!')
          .setThumbnail('https://i.imgur.com/KXTea5h.jpg')
          .addField('Music Commands', `\`-play / -p [music]\` - to play a music\n \`-skip / -s\` - to skip a current music\n\`-queue / -q\` - to shows the current queue\n\`-leave / -dc\` - to disconnecting the bot\n\`-loop\` - to loop the current queue\n\`-nowplay / -np\` -  to check current song title\n\`-pause\` - to pause the current music\n\`-resume\` - to resume the current paused music\n`)
          .addField('Miscellaneous Commands', `\`-help\` to show this thingy \n\`-utc\` - to show UTC/GMT timezone (WIB-7)\n \`-bloxfruits\` - to show blox fruit private server link (roblox) \n \`-rate\` - to giving random number between 1-100 \n \`-ping\` - to check bot ping`)
          
          
        for (const category of this.handler.categories.values()) {

        }
        return msg.channel.send({ embeds: [embed] });
      }
      const embed = CreateEmbed('green')

      return msg.channel.send({ embeds: [embed] });
    } catch (e) {
      this.client.logger.error(e.message);
      return msg.channel.send({ embeds: [CreateEmbed('warn', '⛔ | An error occured')] });
    }
  }
};
