module.exports = {
	name: '!nocontext',
	description: 'No context!',
	execute(msg,args) {
	  console.log('No context reached');
	  //msg.reply(`no context reached`);
	  let channel = msg.channel;
          channel.fetchMessages({ limit: 20 })
  	  .then(messages => {
	  saveMessage = messages.first();

	  // first will be most recent
          // console.log(`Received ${messages.size} messages`)
          //  console.log(messages.last().content);
	  //  console.log(messages.first().content);
          messages.forEach(msg => {
          //console.log('loop',msg.content); 
	  if(saveMessage.id != msg.id){
		console.log('deleting message',msg.id);
		msg.delete();
          } 
	})
	})
  	  .catch(console.error);
	}
	
};


