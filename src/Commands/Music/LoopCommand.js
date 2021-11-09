const { Command } = require('discord-akairo');
const { CreateEmbed } = require('../../Utility/CreateEmbed');

module.exports = class LoopCommand extends Command {
  constructor() {
    super('loop', {
      aliases: ['loop'],
      description: {
        content: 'Loop guild queue',
      },
      category: 'Music',
      cooldown: 3000,
    });
  }

  async exec(msg) {
    try {
      const GuildPlayers = this.client.erela.players.get(msg.guild.id);
      if (!GuildPlayers) return msg.channel.send({ embeds: [CreateEmbed('warn', 'There is no music played now, peko.')] });
      if (!msg.member.voice.channelId) return msg.channel.send({ embeds: [CreateEmbed('warn', 'you must join voice channel to do this.')] });
      if (msg.member.voice.channelId !== GuildPlayers.voiceChannel) return msg.channel.send({ embeds: [CreateEmbed('warn', 'you must join voice channel same as me to do this.')] });
      GuildPlayers.setQueueRepeat(!GuildPlayers.queueRepeat);
      return msg.channel.send({ embeds: [CreateEmbed('info', `${GuildPlayers.queueRepeat ? 'Now **Looping** the queue.' : 'Looping now is **Disabled**.'}`)] });
    } catch (e) {
      this.client.logger.error(e.message);
      return msg.channel.send({ embeds: [CreateEmbed('warn', '⛔ | An error occured')] });
    }
  }
};
