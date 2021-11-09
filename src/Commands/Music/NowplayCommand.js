const { stripIndent } = require('common-tags');
const { Command } = require('discord-akairo');
const { CreateEmbed } = require('../../Utility/CreateEmbed');

module.exports = class NowPlayCommand extends Command {
  constructor() {
    super('nowplay', {
      aliases: ['nowplay', 'np'],
      description: {
        content: 'Get the current playing',
      },
      category: 'Music',
      cooldown: 3000,
    });
  }

  async exec(msg) {
    try {
      const GuildPlayers = this.client.erela.players.get(msg.guild.id);
      if (!GuildPlayers) return msg.channel.send({ embeds: [CreateEmbed('warn', 'There is no music played now, peko.')] });
      
      var minutes = Math.floor(GuildPlayers.queue.current.duration / 60000)
      var seconds = ((GuildPlayers.queue.current.duration % 60000) / 1000).toFixed(0)
      var minutess = minutes + ":" + (seconds < 10 ? '0' : '') + seconds

      const embed = CreateEmbed('green')
      .addField(`${GuildPlayers.queue.current.title}`, `Duration : (${minutess})\nRequested by : @${GuildPlayers.queue.current.requester.username}\nLoop : ${GuildPlayers.queueRepeat ? '**Enabled** looping the queue.' : '**Disabled**.'}`)


      

      return msg.channel.send({ embeds: [embed] });
      

    } catch (e) {
      this.client.logger.error(e.message);
      return msg.channel.send({ embeds: [CreateEmbed('warn', '⛔ | An error occured')] });
    }
  }
};
