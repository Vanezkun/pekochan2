/** ORIGINAL CODE https://github.com/zhycorp/disc-11/blob/main/src/utils/createEmbed.ts */
const { MessageEmbed } = require('discord.js');

const Color = {
  info: 'BLUE',
  warn: 'YELLOW',
  error: 'RED',
  green: 'GREEN',
};
function CreateEmbed(color, message) {
  const embed = new MessageEmbed()
    .setColor(Color[color])

  if (message) embed.setDescription(message);
  return embed;
}
module.exports = { CreateEmbed };
