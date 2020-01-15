// DiscordStatus
// Version: 1.0.0
// GitHub репозиторий:
// https://github.com/GrigoriTrushin/DiscordStatus

const yargs = require ('yargs');
const Discord = require ('discord.js');
const client = new Discord.Client();
const cfg = require ('./cfg.json');

yargs.command({
    command: 'game',
    describe: 'Установит статус играет',
    builder: {
        g: {
            type: 'string',
            demandOption: true,
            describe: 'Название игры'
        }
    },
    handler({g}) {
        client.on("ready", () => {
            client.login(cfg.token);
            console.log(`Logged in as ${client.user.tag}`);
            client.user.setPresence({ game: { name: g, type: 'PLAYING'} });
            console.log(`Статус был изменен на "Играет в ${g}"`);
        });
    }
});

yargs.command({
    command: 'listen',
    describe: 'Установит статус слушает',
    builder: {
        g: {
            type: 'string',
            demandOption: true,
            describe: 'Название песни'
        }
    },
    handler({g}) {
        client.on("ready", () => {
            client.login(cfg.token);
            console.log(`Logged in as ${client.user.tag}`)
            client.user.setPresence({ game: { name: g, type: 'LISTENING'} })
            console.log(`Статус был изменен на "Слушает ${g}"`);
        });
    }
});

yargs.command({
    command: 'watch',
    describe: 'Установит статус смотрит',
    builder: {
        g: {
            type: 'string',
            demandOption: true,
            describe: 'Название видео'
        }
    },
    handler({g}) {
        client.on("ready", () => {
            client.login(cfg.token);
            console.log(`Logged in as ${client.user.tag}`);
            client.user.setPresence({ game: { name: g, type: 'WATCHING'} });
            console.log(`Статус был изменен на "Смотрит ${g}"`);
        });
    }
});

yargs.command({
    command: 'stream',
    describe: 'Установит статус стримит',
    builder: {
        g: {
            type: 'string',
            demandOption: true,
            describe: 'Название игры'
        },
        url: {
            type: 'string',
            demandOption: true,
            describe: 'Ссылка на Twitch'
        }
    },
    handler({g, url}) {
        client.on("ready", () => {
            client.login(cfg.token);
            console.log(`Logged in as ${client.user.tag}`);
            client.user.setPresence({ game: { name: g, type: 'STREAMING', url: url} });
            console.log(`Статус был изменен на "Стримит ${g}. (url - ${url})"`);
        });
    }
});

client.login(cfg.token);
yargs.parse();