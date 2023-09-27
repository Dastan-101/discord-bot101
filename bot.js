
                (async()=>{
                const Discord = require("discord.js");
                const Database = require("easy-json-database");
                const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                const s4d = {
                    Discord,
                    database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`),
                    joiningMember:null,
                    reply:null,
                    tokenInvalid:false,
                    tokenError: null,
                    checkMessageExists() {
                        if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                        if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                    }
                };
                s4d.client = new s4d.Discord.Client({
                    intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                    partials: ["REACTION"]
                });

                var my_0_bank, my_1_bank, my_2_bank, my_3_bank, my_4_bank, my_5_bank, my_6_bank;


s4d.client.on('ready', async () => {
  my_0_bank = 'inf';
  my_1_bank = 0;
  my_2_bank = 330000;
  my_3_bank = 100;
  my_4_bank = 308900;
  my_5_bank = -1000;
  my_6_bank = 0;

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!g alvaro 0 100') {
    s4dmessage.channel.send(String('giving alvaro 0 100'));
  }

});

await s4d.client.login('MTE1NDk4ODU4OTMzMjAzNzcyMg.G2JhcX.bh8MfrvNBAttKr2UHAhHYnC_Ewubkajt5xs-Eo').catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!money alvaro 0') {
    s4dmessage.channel.send(my_0_bank);
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!alvaro 0') {
    s4dmessage.channel.send(String('The Real Alvaro'));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!g alvaro 0 -100') {
    s4dmessage.channel.send(String('giving alvaro 0 -100'));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!money alvaro 69') {
    s4dmessage.channel.send(my_2_bank);
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!g alvaro 69 100') {
    s4dmessage.channel.send(String('giving alvaro 69 100'));
    my_2_bank = (typeof my_2_bank == 'number' ? my_2_bank : 0) + 100;
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!help') {
    s4dmessage.channel.send(String('! then the alvaro id (example !alvaro 39). if you need job just say !job. !money alvaro-id is to see how much money you have.'));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!g alvaro 69 -100') {
    s4dmessage.channel.send(String('giving alvaro 69 -100'));
    my_2_bank = (typeof my_2_bank == 'number' ? my_2_bank : 0) + -100;
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!g alvaro 1 100') {
    s4dmessage.channel.send(String('giving alvaro 69 100'));
    my_1_bank = (typeof my_1_bank == 'number' ? my_1_bank : 0) + 100;
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!money alvaro 1') {
    s4dmessage.channel.send(my_1_bank);
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!g alvaro 1 -100') {
    s4dmessage.channel.send(String('giving alvaro 69 -100'));
    my_1_bank = (typeof my_1_bank == 'number' ? my_1_bank : 0) + -100;
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!alvaro 1') {
    s4dmessage.channel.send(String('Jeremy D'));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!g alvaro 39 100') {
    s4dmessage.channel.send(String('giving alvaro 39 -100'));
    my_3_bank = (typeof my_3_bank == 'number' ? my_3_bank : 0) + 100;
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!g alvaro 39 -100') {
    s4dmessage.channel.send(String('giving alvaro 39 -100'));
    my_3_bank = (typeof my_3_bank == 'number' ? my_3_bank : 0) + -100;
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!money alvaro 39') {
    s4dmessage.channel.send(my_3_bank);
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!alvaro 7642') {
    s4dmessage.channel.send(String('Edward'));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!g alvaro 7652 -100') {
    s4dmessage.channel.send(String('giving alvaro 7652 -100'));
    my_4_bank = (typeof my_4_bank == 'number' ? my_4_bank : 0) + -100;
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!g alvaro 7652 100') {
    s4dmessage.channel.send(String('giving alvaro 7652 100'));
    my_4_bank = (typeof my_4_bank == 'number' ? my_4_bank : 0) + 100;
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!money alvaro 7642') {
    s4dmessage.channel.send(my_4_bank);
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!alvaro 76') {
    s4dmessage.channel.send(String('Vanessa'));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!g alvaro 76 -100') {
    s4dmessage.channel.send(String('giving alvaro 76 -100'));
    my_5_bank = (typeof my_5_bank == 'number' ? my_5_bank : 0) + -100;
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!g alvaro 76 100') {
    s4dmessage.channel.send(String('giving alvaro 76 100'));
    my_5_bank = (typeof my_5_bank == 'number' ? my_5_bank : 0) + 100;
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!money alvaro 76') {
    s4dmessage.channel.send(my_5_bank);
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!alvaro 87652') {
    s4dmessage.channel.send(String('Kenzo'));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!g alvaro 11 -100') {
    s4dmessage.channel.send(String('giving alvaro 11 -100'));
    my_5_bank = (typeof my_5_bank == 'number' ? my_5_bank : 0) + -100;
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!g alvaro 11 100') {
    s4dmessage.channel.send(String('giving alvaro 11 100'));
    my_5_bank = (typeof my_5_bank == 'number' ? my_5_bank : 0) + 100;
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!money alvaro 11') {
    s4dmessage.channel.send(my_6_bank);
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!alvaro 6542') {
    s4dmessage.channel.send(String('Ryu'));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!alvaro 11') {
    s4dmessage.channel.send(String('Glen'));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!alvaro 69') {
    s4dmessage.channel.send(String('Stewart(Soviet)'));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!alvaro 420') {
    s4dmessage.channel.send(String('Kinsey'));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!alvaro 7') {
    s4dmessage.channel.send(String('Luke'));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!alvaro 80000') {
    s4dmessage.channel.send(String('Dallas'));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!alvaro 39') {
    s4dmessage.channel.send(String('Dastan'));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!alvaro 32') {
    s4dmessage.channel.send(String('Reynard'));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!job') {
    s4dmessage.channel.send(String('Plumber/hour(alvaro420,1) Meth Cook(hiring distributors)20/hour(Alvaro69)(alvaro7642) Porn actor-1000000/hour(Alvaro76) Monkeman0/hour(you is zoo animal)(alvaro7642)only one monkeman Pizza delivery30/hour(alvaro39) Policemen50/hour() Chancellor250/hour(alvaro69) Semen distributor(alvaro7) Judge150/hour (alvaro7642) President infinite/hour(alvaro0) Fbi 200/hour:(alvaro6542) Potato farmer 2/hour(alvaro1) Only 2jobs'));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!alvaro 8') {
    s4dmessage.channel.send(String('Mason'));
  }

});


                return s4d;
                })();
            