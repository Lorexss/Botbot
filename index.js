const { Client , GatewayIntentBits, Partials, Collection, InteractionType, EmbedBuilder, ButtonBuilder} = require ("discord.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;
const mongoose = require("mongoose");
const ms = require('ms')
const url = require("url");
const express = require("express");
const app = express();
const moment = require('moment');
require('moment-duration-format');
let fetch = require("node-fetch")

const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const passport = require("passport");
const passporta = require("passport");

const ejs = require("ejs");
const Discord = require('discord.js');
const db = require('quick.db');
const { Strategy } = require("passport-discord");
const client = new Client({
    intents: [
       // GatewayIntentBits.Guilds,
        "Guilds",
        "GuildPresences",
        "GuildMembers",
        "GuildBans",
        "GuildIntegrations",
        "GuildWebhooks",
        "GuildInvites",
        "GuildVoiceStates",
        "GuildPresences",
        "GuildMessages",
        "GuildMessageReactions",
        "GuildMessageTyping",
        "DirectMessages",
        "DirectMessageReactions",
        "DirectMessageTyping",
        "MessageContent"
    ],
});




mongoose.connect(`${client.config.data}`, {

  useNewUrlParser: true, 

useUnifiedTopology: true 
});


mongoose.connection.on("connected", () => {
	console.log("[LOG] Connected to data");
});

mongoose.connection.on("error", () => {
	console.error("[LOG] Connection Error!");
});




/*
const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember], 
});
*/



client.login(client.config.token).then(() => {
loadEvents(client);
loadCommands(client);  
loadPremiumTimer(client);
loadgiveaway(client);  
loadBlistTimer(client);
loadButtons(client);
}).catch((err) => console.log(err));

