const whitehall = require("../../index.js");
const config = require("../../config.json");
const ms = require("ms");

whitehall.once('ready', async () => {
  console.log(`[whitehall] ${whitehall.user.tag} is ready. He looks after ${whitehall.guilds.cache.size} servers and ${whitehall.users.cache.size} uses.`);



  whitehall.user.setActivity(`${config.prefix}help`)
});