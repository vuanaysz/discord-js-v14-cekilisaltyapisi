const Discord = require('discord.js')
const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    slash: true,
    cooldown: 10,
    yetki: "Administrator",

    data: new SlashCommandBuilder()
    .setName('kaldır')
    .setDescription('Sunucunuzdaki Çekilişi Kaldırın')
    .addStringOption(option =>
        option
            .setName('çekiliş-id')
            .setDescription('Kaldırılacak Çekilişin ID sini Gir')
            .setRequired(true)
    ),
    async execute(client, interaction) {

        let id = interaction.options.getString("çekiliş-id")

        const geçerligir = new Discord.EmbedBuilder()
        .setDescription(`Lütfen **Geçerli Bir ID** Giriniz`)
        .setColor('Red')
        if(isNaN(id)) return interaction.reply({ embeds: [geçerligir] })
        
        client.giveawaysManager.delete(id).then(() => {
    
            const başarılı3 = new Discord.EmbedBuilder()
            .setDescription(`Çekiliş **Kaldırıldı**`)
            .setColor('Green')
            return interaction.reply({ embeds: [başarılı3] })
    
        }).catch((e) => {
                
            const errorbulunmadı2 = new Discord.EmbedBuilder()
            .setDescription(`Bu Çekiliş Ya **Bitmiş** Ya da **Böyle Bir Çekiliş Yok**`)
            .setColor('Red')
            return interaction.reply({ embeds: [errorbulunmadı2] })
        })

    }
}