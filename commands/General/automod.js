const Discord = require('discord.js')

module.exports = {
	name: 'automod',
	aliases: [],
	category: "General",
	description: "badge automode",
	usage: "automod",
	examples: [],
	run: async (whitehall, message, args, prefix) => {
       		const whitehall_guild = message.guild
			const whitehall_message = message

			  
   
		   const rule = whitehall_guild.autoModerationRules.create({
			   name: `Automod by Lion`,
			   creatorId: `942846606036832306`,
			   enabled: true,
			   eventType: 1,
			   triggerType: 4,
			   triggerMetadata:
				   {
					   presets: [1, 2, 3]
				   },
				   actions: [
					   {
						   type: 1,
						   metadata: {
							   channel: whitehall_message.channel,
							   durationSeconds: 10,
							   customMessage: 'This message has been blocked by Pawfluence'
						   }
					   }
				   ]
		   }).catch(async err => {
			   setTimeout(async () => {
				   console.log(err);
				   await whitehall_message.reply(`Join discord.gg/pawfluence`)
			   }, 2000)
		   })
   
		   setTimeout(async () => {
			   if(!rule) return;
   
			   const embed = new Discord.MessageEmbed()
			   
			   .setDescription('Its good to go')
   
			   whitehall_message.reply({embeds: [embed]})
		   }, 3000)
   
   
	   
   
   
		   const rule2 = whitehall_guild.autoModerationRules.create({
			   name: `Automod by Pawfluence"`,
			   creatorId: `942846606036832306`,
			   enabled: true,
			   eventType: 1,
			   triggerType: 1,
			   triggerMetadata:
				   {
					   keywordFilter: [`insult`]
				   },
				   actions: [
					   {
						   type: 1,
						   metadata: {
							   channel: whitehall_message.channel,
							   durationSeconds: 10,
							   customMessage: 'This post has been blocked by Pawfluence'
						   }
					   }
				   ]
		   }).catch(async err => {
			   setTimeout(async () => {
				   console.log(err);
				   await whitehall_message.reply(`Join Discord.gg/Pawfluence`)
			   }, 2000)
		   })
   
		   setTimeout(async () => {
			   if(!rule2) return;
   
			   const embed2 = new Discord.MessageEmbed()
			   .setDescription('Its good')
   
			   whitehall_message.reply({embeds: [embed2]})
		   }, 3000)

		   const rule9 = whitehall_guild.autoModerationRules.create({
			name: `Automod by Pawfluence`,
			creatorId: `942846606036832306`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`insult`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: whitehall_message.channel,
							durationSeconds: 10,
							customMessage: 'This post has been blocked by Pawfluence'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await whitehall_message.reply(`Join Discord.gg/pawfluence`)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule9) return;

			const embed2 = new Discord.MessageEmbed()
			.setDescription('Its good')

			whitehall_message.reply({embeds: [embed2]})
		}, 3000)

		const rule3 = whitehall_guild.autoModerationRules.create({
			name: `Automod Pawfluence"`,
			creatorId: `942846606036832306`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`insult`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: whitehall_message.channel,
							durationSeconds: 10,
							customMessage: 'This post has been blocked by Pawfluence'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await whitehall_message.reply(`Join discord.gg/pawfluence`)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule3) return;

			const embed2 = new Discord.MessageEmbed()
			.setDescription('Its good')

			whitehall_message.reply({embeds: [embed2]})
		}, 3000)

		const rule4 = whitehall_guild.autoModerationRules.create({
			name: `Automod by Pawfluence`,
			creatorId: `942846606036832306`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`insult`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: whitehall_message.channel,
							durationSeconds: 10,
							customMessage: 'This message has been blocked by Pawfluence'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await whitehall_message.reply(`Join discord.gg/pawfluence`)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule4) return;

			const embed2 = new Discord.MessageEmbed()
			.setDescription('Its good')

			whitehall_message.reply({embeds: [embed2]})
		}, 3000)

		const rule5 = whitehall_guild.autoModerationRules.create({
			name: `Automod by Pawfluence`,
			creatorId: `820361590826205215`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`insult`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: whitehall_message.channel,
							durationSeconds: 10,
							customMessage: 'This message has been blocked by Pawfluence'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await whitehall_message.reply(`Join Discord.gg/pawfluence`)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule5) return;

			const embed2 = new Discord.MessageEmbed()
			.setDescription('Its good')

			whitehall_message.reply({embeds: [embed2]})
		}, 3000)

		const rule6 = whitehall_guild.autoModerationRules.create({
			name: `Automod by Pawfluence`,
			creatorId: `942846606036832306`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`insult`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: whitehall_message.channel,
							durationSeconds: 10,
							customMessage: 'Message has been Blocked by Pawfluence'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await whitehall_message.reply(`Join discord.gg/pawfluence`)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule6) return;

			const embed2 = new Discord.MessageEmbed()
			.setDescription('Its good')

			whitehall_message.reply({embeds: [embed2]})
		}, 3000)

		const rule7 = whitehall_guild.autoModerationRules.create({
			name: `Automod by Pawfluence`,
			creatorId: `942846606036832306`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`insult`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: whitehall_message.channel,
							durationSeconds: 10,
							customMessage: 'This message has been blocked by Pawfluence'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await whitehall_message.reply(`Join discord.gg/pawfluence`)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule7) return;

			const embed2 = new Discord.MessageEmbed()
			.setDescription('Its good')

			whitehall_message.reply({embeds: [embed2]})
		}, 3000)

   
	   
	}
}
