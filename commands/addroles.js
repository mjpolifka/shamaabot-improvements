module.exports = {
	name: '!addroles',
	description: 'add roles!',
       	async execute(message, args) {
         let rMember = message.member;
         //console.log(args);
         let role=args.join(" ").slice(0);
	 //console.log(role);
         if(!role) return message.reply('Specify a role!');
         let gRole = message.guild.roles.find('name',role);
         if(!gRole) return message.reply('Could not find that role.')

         await(rMember.addRole(gRole.id));
	 message.channel.send(`Added role  ${gRole.name} to <@${rMember.id}>`);

	}

};




