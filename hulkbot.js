const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {

function wordInString(s, word){
  return new RegExp( '\\b' + word + '\\b', 'i').test(s);
}

//wordInString('did you, or did you not, get why?', 'you')

var mess=message.content.toLowerCase();
//check quotes 
var fs = require('fs');

try {  
    var locRead = fs.readFileSync('location.txt', 'utf8');    
} catch(e) {}
var locData = locRead.split(",");
var locDataSize=locData.length - 1;

//check quotes 
var fs = require('fs');

try {  
    var perRead = fs.readFileSync('person.txt', 'utf8');    
} catch(e) {}
var perData = perRead.split(",");
var perDataSize=perData.length;

    if (wordInString(mess,'hh')== 1) {
        var args = message.content.substring(100).split(' ');
        var cmd = args[0];
    	var locDataRand=Math.floor(Math.random() * locDataSize);
	var perDataRand=Math.floor(Math.random() * perDataSize);      

        args = args.splice(1);
        switch(cmd) {
            // !ping
            case '':
          message.channel.send(perData[perDataRand]+' pooped in my '+ locData[locDataRand] +' brother' + locDataSize);
//		    message: 'Poop in my ' + locData[locDataRand] +' brother'
//		    message: perData[perDataRand]+' pooped in my gym brother'
            break;
            
         }
     }
});

client.login(process.env.BOT_TOKEN);
