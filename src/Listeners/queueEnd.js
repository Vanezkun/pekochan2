const { Listener } = require('discord-akairo');
const { CreateEmbed } = require('../Utility/CreateEmbed');

module.exports = class queueEnd extends Listener {
  constructor() {
    super('queueEnd', {
      event: 'queueEnd',
      emitter: 'erela',
    });
  }

  
  exec(player) {
    const QueueChannel = this.client.channels.cache.get(player.textChannel);
    setTimeout(() => { QueueChannel.send({ embeds: [CreateEmbed('info', 'I left the voice channel because there is no more song in queue, sayounara peko!')] });}, 2000);
    setTimeout(() => { player.destroy();}, 2000);
    
    
  }
};
