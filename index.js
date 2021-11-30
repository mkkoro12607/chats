const Discord = require ('discord.js')
const client = new Discord.Client();
const config = require ('./config.json')


client.on('ready', function(){
    console.log(`${client.user.tag} is up`)


})



client.on("message", message => {
    if(message.author.bot) return;

    if(message.channel.id === config.twitter) { // twitter 
        if(!message.attachments.first()){
            let embed = new Discord.MessageEmbed()
            .setDescription("**" + message.content + "**")
            .setFooter("Twitter", "https://cdn.discordapp.com/attachments/744699659414667275/744924735598624888/apple-touch-icon-192x192.png")
            .setTimestamp()
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor(3447003)
            message.channel.send(embed)
            message.delete()
        }
        else if(!message.content){
            let embed2 = new Discord.MessageEmbed()
            .setFooter("Twitter", "https://cdn.discordapp.com/attachments/744699659414667275/744924735598624888/apple-touch-icon-192x192.png")
            .setTimestamp()
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor(3447003)
            .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed2)
            message.delete()
        }
        else if(message.content, message.attachments.first()){
            let embed3 = new Discord.MessageEmbed()
            .setFooter("Twitter", "https://cdn.discordapp.com/attachments/744699659414667275/744924735598624888/apple-touch-icon-192x192.png")
            .setTimestamp()
            .setDescription("**" + message.content + "**")
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor(3447003)
            .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed3)
            message.delete()
        }
    }
    if(message.author.bot) return;

    if(message.channel.id === config.darkchat) { // Darkchat 
        if(!message.attachments.first()){
            let embed = new Discord.MessageEmbed()
            .setDescription("**" + message.content + "**")
            .setFooter("Anonymous", "https://cdn.discordapp.com/attachments/906617129594413096/910234486007029850/annon.png")
            .setTimestamp()
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor(000000)
            message.channel.send(embed)
            message.delete()
        }
        else if(!message.content){
            let embed2 = new Discord.MessageEmbed()
            .setFooter("Anonymous", "https://cdn.discordapp.com/attachments/906617129594413096/910234486007029850/annon.png")
            .setTimestamp()
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor(000000)
            .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed2)
            message.delete()
        }
        else if(message.content, message.attachments.first()){
            let embed3 = new Discord.MessageEmbed()
            .setFooter("Anonymous", "https://cdn.discordapp.com/attachments/906617129594413096/910234486007029850/annon.png")
            .setTimestamp()
            .setDescription("**" + message.content + "**")
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor(000000)
            .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed3)
            message.delete()
        }
    }

   if(message.channel.id === config.instagram) { // instagram
        if(!message.attachments.first()){
            let embed = new Discord.MessageEmbed()
            .setDescription("**" + message.content + "**")
            .setFooter("Instagram", "https://media.discordapp.net/attachments/541685166364557340/733841462537486427/instagram.png")
            .setTimestamp()
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("#4e0097")
            message.channel.send(embed)
            message.delete()
        }
        else if(!message.content){
            let embed2 = new Discord.MessageEmbed()
            .setFooter("Instagram", "https://media.discordapp.net/attachments/541685166364557340/733841462537486427/instagram.png")
            .setTimestamp()
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("#4e0097")
            .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed2)
            message.delete()
        }
        else if(message.content, message.attachments.first()){
            let embed3 = new Discord.MessageEmbed()
            .setFooter("Instagram", "https://media.discordapp.net/attachments/541685166364557340/733841462537486427/instagram.png")
            .setTimestamp()
            .setDescription("**" + message.content + "**")
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("#4e0097")
            .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed3)
            message.delete()
        }
    } if(message.channel.id === config.newspaper) { // newspaper
        if(!message.attachments.first()){
            let embed = new Discord.MessageEmbed()
            .setDescription("**" + message.content + "**")
            .setFooter(`Posted by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setAuthor("Newspaper", "https://i.imgur.com/OUs7w0z.png")
            .setColor("#663300")
            message.channel.send(embed)
            message.delete()
        }
        else if(!message.content){
            let embed2 = new Discord.MessageEmbed()
            .setFooter(`Posted by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setAuthor("Newspaper", "https://i.imgur.com/OUs7w0z.png")
            .setColor("#663300")
            .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed2)
            message.delete()
        }
        else if(message.content, message.attachments.first()){
            let embed3 = new Discord.MessageEmbed()
            .setDescription("**" + message.content + "**")
            .setFooter(`Posted by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setAuthor("Newspaper", "https://i.imgur.com/OUs7w0z.png")
            .setColor("#663300")
            .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed3)
            message.delete()
        }
    } if(message.channel.id === config.mhntoallaxis) { // darkchat
        message.channel.send(message.content, message.attachments.first())
        message.delete({ timeout: 1500 }) //DONT CHANGE TIME POSSIBLE BUGS
    } if(message.channel.id === config.darkchat){ 
        let channel = message.guild.channels.cache.get(config.darkchatlogs)
        if(!message.attachments.first()){ 
          let embed = new Discord.MessageEmbed()
          .setTitle("Dark Chat Logs")
          .addField("Έγραψε ο :", `${message.author.tag}`)
        .addField("Μήνυμα:", `${message.content}`)
        .setColor("BLACK")
        .setTimestamp()

        channel.send(embed)
        }
        if(!message.content){
            let channel2 = message.guild.channels.cache.get(config.darkchatlogs)
          let embed2 = new Discord.MessageEmbed()
          .setTitle("Dark Chat Logs")
          .addField("Έγραψε ο :", `${message.author.tag}`)
        .addField("Μήνυμα:", `Δεν έγραψε τίποτα, απλά έστειλε εικόνα.`)
        .setImage(message.attachments.first().proxyURL)
        .setColor("BLACK")
        .setTimestamp()
          channel2.send(embed2)
        }
        else if(message.content, message.attachments.first()){
            let channel3 = message.guild.channels.cache.get(config.darkchatlogs)
          let embed3 = new Discord.MessageEmbed()
          .setTitle("Dark Chat Logs")
          .addField("Έγραψε ο :", `${message.author.tag}`)
          .addField("Μήνυμα:", `${message.content}`)
        .setImage(message.attachments.first().proxyURL)
        .setColor("BLACK")
        .setTimestamp()
        .setFooter("Dark Chat System")
          channel3.send(embed3)
        }
     
    }
    if(message.channel.id === config.cargr) { // cargr
        if(!message.attachments.first()){
            let embed = new Discord.MessageEmbed()
            .setDescription("**" + message.content + "**")
            .setFooter("Car.gr", "https://cdn.discordapp.com/attachments/901912804095848478/906895017417793556/th.jpg")
            .setTimestamp()
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor('#0000FF')
            message.channel.send(embed)
            message.delete()
        }
        else if(!message.content){
            let embed2 = new Discord.MessageEmbed()
            .setFooter("Car.gr", "https://cdn.discordapp.com/attachments/901912804095848478/906895017417793556/th.jpg")
            .setTimestamp()
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor('#0000FF')
            .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed2)
            message.delete()
        }
        else if(message.content, message.attachments.first()){
            let embed3 = new Discord.MessageEmbed()
            .setFooter("Car.gr", "https://cdn.discordapp.com/attachments/901912804095848478/906895017417793556/th.jpg")
            .setTimestamp()
            .setDescription("**" + message.content + "**")
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor('#0000FF')
            .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed3)
            message.delete()
        }
    }
})


client.login(config.token)
