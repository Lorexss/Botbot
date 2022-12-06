
const { Collection } = require("discord.js");
const delay = new Collection();
const { ButtonStyle } = require("discord.js");
const ms = require("ms");
const db = require('quick.db');
const moment = require("moment");
const { EmbedBuilder } = require("discord.js");
const { ActionRowBuilder, ButtonBuilder } = require("discord.js");
module.exports = {
  name: "interactionCreate",
  
 async execute( interaction, client) { 
     
if (interaction.isChatInputCommand()) { 
  //return;
     
  const command = client.commands.get(interaction.commandName);
     
      if (!command) return interaction.reply ( { content : "This command is outdated." });
   
  
  
 
     command.execute(interaction, client);
    } 
     
     }
  }