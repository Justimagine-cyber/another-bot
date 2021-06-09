const Discord = require('discord.js')
const client = new Discord.client()

client.on("message", message => {
  if(message.content === "hello") {
   return message.channel.send("hi")
  }
}}
          
client.login(process.env.TOKEN)