const Discord = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['info']
        });
    }

    async run(message, presence) {
        let embed = new Discord.MessageEmbed()
                embed.setAuthor(nome:  + message.author.username)
                embed.setDescription("tue info")
                embed.setColor("#FF00FF")
                embed.addField("nome", ${message.author.username}#${message.author.discriminator})
                embed.addField("ID", message.author.id)
                embed.addField("creato il", message.author.createdAt)
                embed.addField("entrato nel server il:", message.member.joinedAt)
                message.channel.send(embed);
    }

};
